# Generated by Django 3.2.12 on 2022-04-03 01:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ui', '0003_alter_task_elapsed_time'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='task',
            options={'ordering': ('-updated_at',)},
        ),
    ]
