#!/bin/sh

set -e

python manage.py collectstatic --noinput
python manage.py migrate --noinput

uwsgi --socket :8000 --master --enable-threads --module testrail_import_app.wsgi &
daphne -b 0.0.0.0 -p 8001 testrail_import_app.asgi:application &