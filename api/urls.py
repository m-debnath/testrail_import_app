from django.urls import path
from . import views

urlpatterns = [
    path('get_projects/', views.get_projects),
    path('get_suites/<int:project_id>', views.get_suites),
    path('get_sections/<int:project_id>&suite_id=<int:suite_id>', views.get_sections),
]