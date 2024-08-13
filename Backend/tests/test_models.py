from django.test import TestCase
from wordly_app.models import Word, Category, Definition

class WordModelTest(TestCase):
  def setUp(self):
    self.category = Category.objects.create(name='Test Category')
    self.word = Word.objects.create(
      word='Test Word',
      category=self.category,
      pronunciation='test',
      parts_of_speech='test'
    )
    self.definition = Definition.objects.create(
      word=self.word,
      definition='test',
      example='test'
    )

  def test_word_model(self):
    self.assertEqual(self.word.word, 'Test Word')
    self.assertEqual(self.word.category, self.category)
    self.assertEqual(self.word.pronunciation, 'test')
    self.assertEqual(self.word.parts_of_speech, 'test')

  def test_definition_model(self):
    self.assertEqual(self.definition.word, self.word)
    self.assertEqual(self.definition.definition, 'test')
    self.assertEqual(self.definition.example, 'test')