# Generated by Django 4.2.14 on 2024-08-08 02:00

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wordly_app', '0003_word_created_date_word_next_memory_test_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='word',
            name='next_memory_test_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 9, 2, 0, 22, 717919, tzinfo=datetime.timezone.utc)),
        ),
    ]