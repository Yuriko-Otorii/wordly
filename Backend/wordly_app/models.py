from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone
import datetime


class User(AbstractUser):
    email = models.EmailField(unique=True)
    
class Category(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='categories')

    def __str__(self):
        return self.name
    
class Definition(models.Model):
    definition = ArrayField(models.CharField(max_length=1000))
    word = models.ForeignKey('Word', on_delete=models.CASCADE, related_name='definitions')

    def __str__(self):
        return ', '.join(self.definitions[:2]) 
    
class Word(models.Model):
    word = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    pronunciation = models.CharField(max_length=200, blank=True, null=True)
    parts_of_speech = models.CharField(max_length=50, blank=True, null=True)
    image = models.ImageField(upload_to="image/", blank=True, null=True)
    example = ArrayField(models.CharField(max_length=1000), blank=True, null=True)
    memory_process = models.IntegerField(default=1)
    test_count = models.IntegerField(default=0)
    is_favorite = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    next_memory_test_date = models.DateTimeField(default=timezone.now() + datetime.timedelta(days=1))
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.word
    
