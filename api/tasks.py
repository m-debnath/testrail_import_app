from celery import shared_task
from time import sleep
from ui.models import Task
from .serializers import TaskSerializer
from django_eventstream import send_event
import requests
import os
from testrail import *
import re
from shutil import unpack_archive

TESTRAIL = APIClient(os.environ.get('TESTRAIL_URL', 'https://tele2se.testrail.net/'))

@shared_task(bind=True)
def import_task(self, task_id, username, password, auth_header):
    hostname = os.environ.get('CURRENT_HOST', 'http://localhost:8000')
    print(f'Task id: {task_id}')
    print(f'Username: {username}')
    print(f'password: {password}')
    
    current_task = Task.objects.get(id=task_id)
    current_user = current_task.user

    # Update total count
    total_cases = 10
    current_task.total_cases = total_cases
    current_task.save()

    # Run Test case import here
    for i in range(0, total_cases):
        sleep(1)
        current_task.status = "In Progress"
        current_task.imported_cases = i + 1
        current_task.save()
        requests.post(f'{hostname}/api/create_event/', json={"user": current_user}, headers={"Authorization": auth_header}, verify=False)
    
    current_task.status = "Complete"
    current_task.save()
    requests.post(f'{hostname}/api/create_event/', json={"user": current_user}, headers={"Authorization": auth_header})
    print('Task Done!')