from graphene import ObjectType, List, Field, ID
import graphql_jwt
from django.contrib.auth import get_user_model
from .authentication import CreateUser, LoginUser
from .word_mutation import CreateWord
from .models import Word, Category, Definition
from .types import UserType, WordType, CategoryType, DefinitionType

class Query(ObjectType):
    users = List(UserType)
    def resolve_users(self, info, **kwargs):
        return get_user_model().objects.all()
    
    words = List(WordType)
    categories = List(CategoryType, user_id=ID())
    definition = Field(DefinitionType, word_id=ID())

    def resolve_words(self, info):
        return Word.objects.all()
    
    def resolve_categories(self, info, user_id):
        user = info.context.user
        if user_id:
            return Category.objects.filter(user_id=user_id)
        return Category.objects.filter(user=user)

    def resolve_definition(self, info, word_id):
        return Definition.objects.filter(word_id=word_id).first()

class Mutation(ObjectType):
    signup = CreateUser.Field()
    login = LoginUser.Field()
    

    create_word = CreateWord.Field()