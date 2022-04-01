# Generated by Django 3.2.12 on 2022-04-01 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20220401_2107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='project_name',
            field=models.CharField(blank=True, default='', max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='section_name',
            field=models.CharField(blank=True, default='', max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='status',
            field=models.CharField(blank=True, default='', max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='task',
            name='suite_name',
            field=models.CharField(blank=True, default='', max_length=254, null=True),
        ),
    ]
