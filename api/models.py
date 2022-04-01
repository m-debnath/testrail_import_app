from django.db import models
from string import ascii_lowercase
from random import choices as random_choices
from django.conf import settings

def generate_unique_session_id():
    length = settings.SESSION_ID_MAX_LENGTH
    while True:
        session_id = ''.join(random_choices(ascii_lowercase, k=length))
        if Task.objects.filter(session_id=session_id).count() == 0:
            break
    return session_id

def upload_to(instance, filename):
    return f'{instance.user}/{instance.session_id}/{filename}'
