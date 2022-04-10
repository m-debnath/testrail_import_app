#!/bin/sh

set -e

python manage.py collectstatic --noinput
python manage.py migrate --noinput

celery -A testrail_import_app worker -l info --detach
daphne -b 0.0.0.0 -p 8000 -v 3 --access-log /vol/web/daphne.log testrail_import_app.asgi:application