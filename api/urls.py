from django.urls import path, include
from . import views
from django_eventstream import urls

urlpatterns = [
    path('get_projects/', views.get_projects),
    path('get_suites/<int:project_id>', views.get_suites),
    path('get_sections/<int:project_id>&suite_id=<int:suite_id>', views.get_sections),
    path('process_task/', views.ProcessTask.as_view()),
    path('create_event/', views.EventStream.as_view({
        'post': 'store',
    }), name='create_message'),
    path('events/<user>/', include(urls), {
        'format-channels': ['task-{user}']
    }),
]