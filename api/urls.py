from django.urls import path
from . import views

urlpatterns = [
    path('get_projects/', views.get_projects),
    path('get_suites/<int:num>', views.get_suites),
]