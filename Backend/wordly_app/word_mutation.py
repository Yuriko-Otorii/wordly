from graphene import Mutation, Field, String, List
from graphql import GraphQLError
from graphene_file_upload.scalars import Upload
from .types import WordType
from .models import Word, Definition, Category, User

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

    def mutate(self, info, word, category_name, definition, example=[], pronunciation='', parts_of_speech='', image=None):
        user = info.context.user
        if not user.is_authenticated:
            raise GraphQLError('Authentication required.')

        category = Category.objects.filter(name=category_name, user=user).first()
        if not category:
            category = Category.objects.create(name=category_name, user=user)

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