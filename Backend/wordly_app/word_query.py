from graphene import ObjectType, List, ID
from .types import WordType, DefinitionChoiceType, WordTestType
from .models import Word, Definition
import random, copy

class GetWordsByUserId(ObjectType):
  getWordsByUserId = List(WordType, user_id=ID())

  def resolve_getWordsByUserId(self, info, user_id):
    user = info.context.user
    if user_id:
      return Word.objects.filter(user_id=user_id)
    return Word.objects.filter(user=user)

class GetWordsByCategory(ObjectType):
  getWordsByCategory = List(WordType, category_id=ID())

  def resolve_getWordsByCategory(self, info, category_id):
    return Word.objects.filter(category_id=category_id)

class GetWordTestByMemoryProcess(ObjectType):
  getWordTestByMemoryProcess = List(List(WordTestType), user_id=ID())

  def resolve_getWordTestByMemoryProcess(self, info, user_id):
    memoryProcess1 = Word.objects.filter(user_id=user_id, memory_process=1)
    memoryProcess2 = Word.objects.filter(user_id=user_id, memory_process=2)
    memoryProcess3 = Word.objects.filter(user_id=user_id, memory_process=3)
    memoryProcess4 = Word.objects.filter(user_id=user_id, memory_process=4)
    word_test_data1 = []
    word_test_data2 = []
    word_test_data3 = []
    word_test_data4 = []

    def create_definition_options(word):
      all_definitions = []
      correct_def = Definition.objects.filter(word_id=word.id).order_by('?').first()
      incorrect_defs = Definition.objects.exclude(word_id=word.id)
      random_incorrect_defs = list(incorrect_defs.order_by('?')[:3])

      all_definitions = [
          DefinitionChoiceType(definition=correct_def.definition[0], is_correct=True)
      ] + [
          DefinitionChoiceType(definition=wd.definition[0], is_correct=False)
          for wd in random_incorrect_defs
      ]
      random.shuffle(all_definitions)

      return all_definitions

    for word in memoryProcess1:
      test_word = WordTestType(word)
      test_word.definition_choices = create_definition_options(word)
      word_test_data1.append(test_word)
    
    for word in memoryProcess2:
      test_word = WordTestType(word)
      test_word.definition_choices = create_definition_options(word)
      word_test_data2.append(test_word)

    for word in memoryProcess3:
      test_word = WordTestType(word)
      test_word.definition_choices = create_definition_options(word)
      word_test_data3.append(test_word)
    
    for word in memoryProcess4:
      test_word = WordTestType(word)
      test_word.definition_choices = create_definition_options(word)
      word_test_data4.append(test_word)

    word_test_data = []
    word_test_data.extend([word_test_data1, word_test_data2, word_test_data3, word_test_data4])

    return word_test_data
  
