#!/bin/sh

set -e

python manage.py collectstatic --noinput
python manage.py migrate --noinput

daphne -v 3 testrail_import_app.asgi:application