from graphene import ObjectType, List, Field, ID, Int, String
import graphql_jwt
from django.contrib.auth import get_user_model
from .authentication import CreateUser, LoginUser
from .word_mutation import CreateCategory, CreateWord, UpdateWord, DeleteWord, UpdateMemoryProcess
from .models import Word, Category, Definition
from .types import UserType, WordType, CategoryType, DefinitionType
from .word_query import GetWordsByUserId, GetWordsByCategory, GetWordTestByMemoryProcess

class Query(
    GetWordsByUserId,
    GetWordsByCategory,
    GetWordTestByMemoryProcess,
    ObjectType,
    ):
    users = List(UserType)
    def resolve_users(self, info, **kwargs):
        return get_user_model().objects.all()
    
    words = List(WordType)
    def resolve_words(self, info):
        return Word.objects.all()
    
    categories = List(CategoryType, user_id=ID())
    def resolve_categories(self, info, user_id):
        user = info.context.user
        if user_id:
            return Category.objects.filter(user_id=user_id)
        return Category.objects.filter(user=user)

    definition = Field(DefinitionType, word_id=ID())
    def resolve_definition(self, info, word_id):
        return Definition.objects.filter(word_id=word_id).first()
    
class Mutation(ObjectType):
    signup = CreateUser.Field()
    login = LoginUser.Field()

    create_category = CreateCategory.Field()
    create_word = CreateWord.Field()
    update_word = UpdateWord.Field()
    delete_word = DeleteWord.Field()
    update_memory_process = UpdateMemoryProcess.Field()