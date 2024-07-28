from graphene_django.types import DjangoObjectType
from .models import User, Word, Definition, Category

class UserType(DjangoObjectType):
    class Meta:
        model = User

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = "__all__"
class DefinitionType(DjangoObjectType):
    class Meta:
        model = Definition
        fields = "__all__"

class WordType(DjangoObjectType):
    class Meta:
        model = Word
        fields = "__all__"