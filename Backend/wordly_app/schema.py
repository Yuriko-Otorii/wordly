import graphene
from django.contrib.auth import get_user_model
from .mutations import CreateUser, LoginUser
from .types import UserType

class Query(graphene.ObjectType):
    users = graphene.List(UserType)

    def resolve_users(self, info, **kwargs):
        return get_user_model().objects.all()

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    token_auth = LoginUser.Field()