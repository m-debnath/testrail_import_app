from pyexpat import model
from statistics import mode
from rest_framework.serializers import ModelSerializer
from ui.models import Task


class TaskSerializer(ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"