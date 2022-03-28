FROM python:3.9-alpine

ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY . /app

RUN apk add --update --no-cache gcc libc-dev linux-headers musl-dev mariadb-connector-c-dev openssl-dev libffi-dev
RUN pip install -r requirements.txt

RUN rm -r .dbdata
RUN chmod +X wait-for