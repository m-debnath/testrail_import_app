from django.urls import path
from . import views

urlpatterns = [
    path('get_projects/', views.get_projects),
]