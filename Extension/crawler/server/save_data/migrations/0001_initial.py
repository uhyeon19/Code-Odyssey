# Generated by Django 4.2.9 on 2024-01-30 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProblemData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('platform', models.CharField(max_length=20)),
                ('link', models.URLField()),
                ('num', models.IntegerField()),
                ('title', models.CharField(max_length=200)),
                ('timeLimits', models.CharField(max_length=200)),
                ('memoryLimits', models.CharField(max_length=200)),
                ('level', models.CharField(max_length=20)),
                ('description', models.TextField()),
                ('inputSample', models.TextField(blank=True, null=True)),
                ('outputSample', models.TextField(blank=True, null=True)),
                ('types', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
