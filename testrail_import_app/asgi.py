import os
import django
from django.core.asgi import get_asgi_application
from django.conf.urls import url
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import django_eventstream

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "testrail_import_app.settings")

application = ProtocolTypeRouter({
    'http': URLRouter([
        url(r'^api/events/(?P<user>[^/]+)/', AuthMiddlewareStack(
            URLRouter(django_eventstream.routing.urlpatterns)
        ), { 'format-channels': ['task-{user}'] }),
        url(r'', get_asgi_application()),
    ]),
})