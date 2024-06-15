import graphene
from graphene_django.types import DjangoObjectType
from wordly_app.models import User

# Define the User type to create GraphQL types (Graphene will create GraphQL types from this)
class UserType(DjangoObjectType):
  class Meta:
    model = User
    fields = ("id", "username", "email", "password")

# Define the Query class to create GraphQL queries
class Query(graphene.ObjectType):
  users = graphene.List(graphene.NonNull(UserType))

def resolve_users(self, info):
  return User.objects.all()

schema = graphene.Schema(query=Query)