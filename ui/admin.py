from django.contrib import admin
from api.models import Task

# Site Header
admin.site.site_header = 'Testrail Import Tool Admin'

# Models
admin.site.register(Task)