from datetime import timedelta
from django.db import models
from string import ascii_uppercase, digits
from random import choices as random_choices
from django.conf import settings

def generate_unique_session_id():
    length = settings.SESSION_ID_MAX_LENGTH - 2
    while True:
        session_id = '1-' + ''.join(random_choices(ascii_uppercase + digits, k=length))
        if Task.objects.filter(session_id=session_id).count() == 0:
            break
    return session_id

def upload_to(instance, filename):
    return f'{instance.user}/{instance.session_id}/{filename}'

class Task(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    session_id = models.CharField(max_length=settings.SESSION_ID_MAX_LENGTH, default=generate_unique_session_id, unique=True)
    user = models.EmailField(max_length=254, default='trdjadmin@hobbycodes.com')
    id_file_name = models.FileField(upload_to=upload_to)
    steps_file_name = models.FileField(upload_to=upload_to)
    attachment_file_name = models.FileField(upload_to=upload_to, blank=True, null=True)
    project_id = models.IntegerField(default=0)
    project_name = models.CharField(max_length=254, default='', blank=True, null=True)
    suite_id = models.IntegerField(default=0)
    suite_name = models.CharField(max_length=254, default='', blank=True, null=True)
    section_id = models.IntegerField(default=0)
    section_name = models.CharField(max_length=254, default='', blank=True, null=True)
    retry_import = models.BooleanField(default=False)
    total_cases = models.IntegerField(default=0)
    imported_cases = models.IntegerField(default=0)
    elapsed_time = models.DurationField(default=timedelta)
    status = models.CharField(max_length=20, default='', blank=True, null=True)
    status_message = models.TextField(default='', blank=True, null=True)
    error_message = models.TextField(default='', blank=True, null=True)

    class Meta:
        ordering = ('-updated_at',)

    def __str__(self):
        return "Id: " + str(self.pk) + ", Session Id: " + self.session_id + ", User: " + self.user + ", Status: " + str(self.status)