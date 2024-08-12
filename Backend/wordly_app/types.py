from graphene_django.types import DjangoObjectType
from graphene import ObjectType, String, List, Boolean, Field
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

class DefinitionChoiceType(ObjectType):
    definition = String()
    is_correct = Boolean()

class WordTestType(ObjectType):
    word = Field(WordType)
    definition_choices = List(DefinitionChoiceType)
