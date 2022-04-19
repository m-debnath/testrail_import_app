from django.urls import path, include
from . import views
from django_eventstream import urls

urlpatterns = [
    path('get_projects/', views.GetProjects.as_view()),
    path('get_suites/<int:project_id>', views.GetSuites.as_view()),
    path('get_sections/<int:project_id>&suite_id=<int:suite_id>', views.GetSections.as_view()),
    path('process_task/', views.ProcessTask.as_view()),
    path('create_event/', views.EventStream.as_view({
        'post': 'store',
    }), name='create_event'),
]