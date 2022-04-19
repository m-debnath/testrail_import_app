from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
from django.utils import timezone
from testrail import *
import os

TESTRAIL = APIClient(os.environ.get('TESTRAIL_URL', 'https://tele2se.testrail.net/'))

class TestrailAuthBackend(BaseBackend):
    
    def authenticate(self, request, username=None, password=None):
        try:
            TESTRAIL.user = username
            TESTRAIL.password = password
            response = TESTRAIL.send_get(f'get_user_by_email&email={username}')
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                user = User(username=username)
                user.first_name = response.get('name').split(' ')[0]
                user.last_name = response.get('name').split(' ')[1]
                user.email = username
            user.last_login = timezone.now()
            user.save()
            return user
        except APIError:
            pass
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None