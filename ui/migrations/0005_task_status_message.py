# Generated by Django 3.2.12 on 2022-04-05 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ui', '0004_alter_task_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='status_message',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]
