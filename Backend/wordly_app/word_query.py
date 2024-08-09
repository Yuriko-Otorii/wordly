from graphql_jwt.decorators import login_required
from graphene import ObjectType, List, ID, String
from .types import WordType, DefinitionChoiceType, WordTestType
from .models import Word, Definition
from django.utils import timezone
import random, datetime
class GetWordsByUserId(ObjectType):
  getWordsByUserId = List(WordType)

  @login_required
  def resolve_getWordsByUserId(self, info):
    user = info.context.user
    user_id = user.id
    if user_id:
      return Word.objects.filter(user_id=user_id)
    return Word.objects.filter(user=user)
  
class GetFlashcardWordsFromAllCategories(ObjectType):
  getFlashcardWordsFromAllCategories = List(WordType)

  @login_required
  def resolve_getFlashcardWordsFromAllCategories(self, info):
    user = info.context.user
    user_id = user.id
    all_words = Word.objects.filter(user_id=user_id)
    flashcard_words = random.sample(list(all_words), 10)
    return flashcard_words

class GetWordsByCategory(ObjectType):
  getWordsByCategory = List(WordType, category_id=ID())

  @login_required
  def resolve_getWordsByCategory(self, info, category_id):
    return Word.objects.filter(category_id=category_id)

class GetWordTestByMemoryProcess(ObjectType):
  getWordTestByMemoryProcess = List(List(WordTestType))

  @login_required
  def resolve_getWordTestByMemoryProcess(self, info):
    user = info.context.user
    user_id = user.id
    today = timezone.now()

    memoryProcess1 = Word.objects.filter(user_id=user_id, memory_process=1, next_memory_test_date__lt=today)
    memoryProcess2 = Word.objects.filter(user_id=user_id, memory_process=2, next_memory_test_date__lt=today)
    memoryProcess3 = Word.objects.filter(user_id=user_id, memory_process=3, next_memory_test_date__lt=today)
    memoryProcess4 = Word.objects.filter(user_id=user_id, memory_process=4, next_memory_test_date__lt=today)
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
  
class GetWordsByDate(ObjectType):
  getWordsByDate = List(WordType, date=String())

  @login_required
  def resolve_getWordsByDate(self, info, period):
    user = info.context.user
    user_id = user.id
    now = timezone.now()
    if period == 'yesterday':
        start_date = now - datetime.timedelta(days=1)
        end_date = now - datetime.timedelta(days=0)
    elif period == 'week':
        start_date = now - datetime.timedelta(weeks=1)
        end_date = now
    elif period == 'two_weeks':
        start_date = now - datetime.timedelta(weeks=2)
        end_date = now
    elif period == 'month':
        start_date = now - datetime.timedelta(days=30)
        end_date = now
    else:
        raise ValueError("Invalid period")
    
    return Word.objects.filter(user_id=user_id, created_date__range=(start_date, end_date))