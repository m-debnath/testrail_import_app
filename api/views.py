from django.shortcuts import render
from django.http import HttpResponse
import requests
import json

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

def get_sections(request, project_id=None):
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
