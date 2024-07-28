from graphene import ObjectType, List, Field, ID, Int
import graphql_jwt
from django.contrib.auth import get_user_model
from .authentication import CreateUser, LoginUser
from .word_mutation import CreateCategory, CreateWord, UpdateWord, DeleteWord
from .models import Word, Category, Definition
from .types import UserType, WordType, CategoryType, DefinitionType

class Query(ObjectType):
    users = List(UserType)
    def resolve_users(self, info, **kwargs):
        return get_user_model().objects.all()
    
    words = List(WordType)
    getWordsByUserId = List(WordType, user_id=ID())
    getWordsByCategory = List(WordType, category_id=ID())
    getWordsByMemoryProcess = List(WordType, memory_process=Int())
    categories = List(CategoryType, user_id=ID())
    definition = Field(DefinitionType, word_id=ID())

    def resolve_words(self, info):
        return Word.objects.all()
    
    def resolve_getWordsByUserId(self, info, user_id):
        user = info.context.user
        if user_id:
            return Word.objects.filter(user_id=user_id)
        return Word.objects.filter(user=user)
    
    def resolve_getWordsByCategory(self, info, category_id):
        return Word.objects.filter(category_id=category_id)
    
    def resolve_getWordsByMemoryProcess(self, info, memory_process):
        # ここでのreturnを、数を絞って複数のグループとして渡すか、一括で渡すか要検討。
        return Word.objects.filter(memory_process=memory_process)
    
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

    create_category = CreateCategory.Field()
    create_word = CreateWord.Field()
    update_word = UpdateWord.Field()
    delete_word = DeleteWord.Field()