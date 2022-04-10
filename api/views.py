from django.http import HttpResponse
import requests
import json
from ui.models import Task
from django.db.models import Q
from .serializers import TaskSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from base64 import b64decode
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from django_eventstream import send_event
from .tasks import import_task

TESRAIL_BASE_URL = 'https://tele2se.testrail.net/index.php?/api/v2'

def get_projects(request):
    global TESRAIL_BASE_URL

    if request.method == 'GET':
        request_url = f'{TESRAIL_BASE_URL}{request.path.replace("/api", "")}'
        projects = []
        request_headers = {}
        for header in request.headers:
            if header in ['Authorization', 'Accept', 'Accept-Encoding']:
                request_headers[header] = request.headers[header]
        while True:
            response = requests.get(request_url, params=request.GET, headers=request_headers)
            if response.status_code == 200:
                response_obj = json.loads(response.text)
                projects.extend(response_obj['projects'])
                if not response_obj['_links']['next']:
                    break
                else:
                    next_url = response_obj['_links']['next']
                    request_url = f'{TESRAIL_BASE_URL}{next_url.replace("/api/v2", "")}'
            else:
                django_response = HttpResponse(
                    content=response.content,
                    status=response.status_code,
                    content_type=response.headers['Content-Type']
                )
                return django_response
        django_response = HttpResponse(
            content=json.dumps(projects),
            status=response.status_code,
            content_type=response.headers['Content-Type']
        )
        return django_response

def get_suites(request, project_id=None):
    global TESRAIL_BASE_URL

    if request.method == 'GET':
        request_url = f'{TESRAIL_BASE_URL}{request.path.replace("/api", "")}'
        suites = []
        request_headers = {}
        for header in request.headers:
            if header in ['Authorization', 'Accept', 'Accept-Encoding']:
                request_headers[header] = request.headers[header]
        response = requests.get(request_url, params=request.GET, headers=request_headers)
        if response.status_code == 200:
            response_obj = json.loads(response.text)
            suites.extend(response_obj)
            django_response = HttpResponse(
                content=json.dumps(suites),
                status=response.status_code,
                content_type=response.headers['Content-Type']
            )
        else:
            django_response = HttpResponse(
                content=response.content,
                status=response.status_code,
                content_type=response.headers['Content-Type']
            )
        return django_response

def get_sections(request, project_id=None, suite_id=None):
    global TESRAIL_BASE_URL

    if request.method == 'GET':
        request_url = f'{TESRAIL_BASE_URL}{request.path.replace("/api", "")}'
        sections = []
        request_headers = {}
        for header in request.headers:
            if header in ['Authorization', 'Accept', 'Accept-Encoding']:
                request_headers[header] = request.headers[header]
        while True:
            response = requests.get(request_url, params=request.GET, headers=request_headers)
            if response.status_code == 200:
                response_obj = json.loads(response.text)
                sections.extend([section for section in response_obj['sections'] if section['depth'] == 0])
                if not response_obj['_links']['next']:
                    break
                else:
                    next_url = response_obj['_links']['next']
                    request_url = f'{TESRAIL_BASE_URL}{next_url.replace("/api/v2", "")}'
            else:
                django_response = HttpResponse(
                    content=response.content,
                    status=response.status_code,
                    content_type=response.headers['Content-Type']
                )
                return django_response
        django_response = HttpResponse(
            content=json.dumps(sections),
            status=response.status_code,
            content_type=response.headers['Content-Type']
        )
        return django_response


class ProcessTask(APIView):
    permission_classes = [AllowAny,]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        request_headers = {}
        username = ''
        password = ''
        for header in request.headers:
            if header in ['Authorization', 'Accept', 'Accept-Encoding']:
                request_headers[header] = request.headers[header]
                if header == 'Authorization':
                    username = b64decode(request.headers[header].split()[1]).decode('utf-8').split(':')[0]
                    password = b64decode(request.headers[header].split()[1]).decode('utf-8').split(':')[1]
        get_user_url = f'{TESRAIL_BASE_URL}{request.path.replace("/api", "").replace("/process_task", "")}get_user_by_email&email={username}'
        get_user_response = requests.get(get_user_url, headers=request_headers)
        if get_user_response.status_code == 200:
            serializer = TaskSerializer(data=request.data, context={"request":request})
            if serializer.is_valid():
                serializer.save()
                print(serializer.data.get('id'), request.get_host(), request.headers['Authorization'])
                import_task.delay(serializer.data.get('id'), username, password, request.headers['Authorization'])
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(
                data={},
                status=get_user_response.status_code,
                content_type=get_user_response.headers['Content-Type']
            )

class EventStream(ModelViewSet):
    permission_classes = (AllowAny,)

    def store(self, request):
        username = request.data.get('user', '')
        latest_task = Task.objects.filter(Q(user=username)).first()
        send_event('task-{}'.format(username), 'message', TaskSerializer(latest_task).data, async_publish=False)
        return Response(TaskSerializer(latest_task).data, status=status.HTTP_200_OK)
