from celery import shared_task
from time import sleep
from ui.models import Task
from .serializers import TaskSerializer
from django_eventstream import send_event
import requests
import os

@shared_task(bind=True)
def import_task(self, task_id, auth_header):
    hostname = os.environ.get('CURRENT_HOST', 'http://localhost:8000')
    print(f'Task id: {task_id}')
    current_task = Task.objects.get(id=task_id)
    current_user = current_task.user
    sleep(10)
    current_task.status = "In Progress"
    current_task.save()
    requests.post(f'{hostname}/api/create_event/', json={"user": current_user}, headers={"Authorization": auth_header})
    sleep(10)
    current_task.status = "Complete"
    current_task.save()
    requests.post(f'{hostname}/api/create_event/', json={"user": current_user}, headers={"Authorization": auth_header})
    print('Task Done!')