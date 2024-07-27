from graphene import Mutation, Field, String, List, ID
from graphql import GraphQLError
from graphene_file_upload.scalars import Upload
from .types import WordType, CategoryType
from .models import Word, Definition, Category, User


class CreateCategory(Mutation):
    class Arguments:
        category_name = String(required=True)

    category = Field(CategoryType)

    def mutate(self, info, category_name):
        try:
            user = info.context.user
            if not user.is_authenticated:
                raise GraphQLError('Authentication required.')

            category = Category.objects.create(
                name = category_name,
                user = user
            )

            return CreateCategory(category=category)
        except Exception as e:
            raise GraphQLError(str(e))
    
class CreateWord(Mutation):
    class Arguments:
        word = String(required=True)
        category_name = String(required=True)
        definition = List(String, required=True)
        example = List(String)
        pronunciation = String()
        parts_of_speech = String()
        image = Upload()

    word = Field(WordType)

    def mutate(self, info, word, category_name, definition, example=None, pronunciation=None, parts_of_speech=None, image=None):
        try:
            user = info.context.user
            if not user.is_authenticated:
                raise GraphQLError('Authentication required.')
            
            category = Category.objects.filter(user=user, name=category_name).first()

            new_word = Word.objects.create(
                word = word,
                category = category,
                user = user,
                pronunciation = pronunciation,
                parts_of_speech = parts_of_speech,
                example = example,
                image = image,
            )

            Definition.objects.create(
                word = new_word,
                definition = definition
            )

            return CreateWord(word=new_word)
        except Exception as e:
            raise GraphQLError(str(e))

class UpdateWord(Mutation):
    class Arguments:
        word_id = ID(required=True)
        word = String()
        category_name = String()
        definition = List(String)
        example = List(String)
        pronunciation = String()
        parts_of_speech = String()
        image = Upload()

    word = Field(WordType)

    def mutate(self, info, word_id, word=None, category_name=None, definition=None, example=None, pronunciation=None, parts_of_speech=None, image=None):
        try:
            user = info.context.user
            if not user.is_authenticated:
                raise GraphQLError('Authentication required.')
            
            category = Category.objects.filter(user=user, name=category_name).first()

            target_word = Word.objects.filter(user=user, id=word_id).first()
            if target_word is None:
                raise GraphQLError('Word not found.')
            
            if word is not None:
                target_word.word = word
            if category is not None:
                target_word.category = category
            if example is not None:
                target_word.example = example
            if pronunciation is not None:
                target_word.pronunciation = pronunciation
            if parts_of_speech is not None:
                target_word.parts_of_speech = parts_of_speech
            if image is not None:
                target_word.image = image

            target_word.save()

            if definition is not None:
                definition = Definition.objects.filter(word=word).first()
                definition.definition = definition
                definition.save()

            return UpdateWord(word=target_word)
        except Exception as e:
            raise GraphQLError(str(e))

class DeleteWord(Mutation):
    class Arguments:
        word_id = ID(required=True)

    word = Field(WordType)

    def mutate(self, info, word_id):
        try:
            user = info.context.user
            if not user.is_authenticated:
                raise GraphQLError('Authentication required.')

            word = Word.objects.filter(user=user, id=word_id).first()
            if word is None:
                raise GraphQLError('Word not found.')

            word.delete()

            return DeleteWord(word=word)
        except Exception as e:
            raise GraphQLError(str(e))