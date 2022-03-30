from django.shortcuts import render
from django.http import HttpResponse
import requests

TESRAIL_BASE_URL = 'https://tele2se.testrail.net/index.php?/api/v2'

# Create your views here.
def api(request):
    global TESRAIL_BASE_URL

    if request.method == 'GET':
        request_url = f'{TESRAIL_BASE_URL}{request.path.replace("/api", "")}'
        request_headers = {}
        for header in request.headers:
            if header in ['Authorization', 'Accept', 'Accept-Encoding']:
                request_headers[header] = request.headers[header]
        response = requests.get(request_url, params=request.GET, headers=request_headers)
        django_response = HttpResponse(
            content=response.content,
            status=response.status_code,
            content_type=response.headers['Content-Type']
        )
        return django_response
