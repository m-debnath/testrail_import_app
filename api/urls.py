from django.urls import path
from . import views

urlpatterns = [
    path('get_projects/', views.get_projects),
    path('get_suites/<int:project_id>', views.get_suites),
]