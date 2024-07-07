import graphene
from django.contrib.auth import get_user_model, authenticate
from graphql_jwt.shortcuts import get_token
from .types import UserType

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)
    token = graphene.String()

    class Arguments:
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, username, email, password):
        user = get_user_model()(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()

        token = get_token(user)

        return CreateUser(user=user, token=token)

class LoginUser(graphene.Mutation):
    token = graphene.String()
    user = graphene.Field(UserType)

    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(self, info, email, password):
        user = authenticate(username=email, password=password)

        if user is None:
            raise Exception('Invalid credentials')

        token = get_token(user)

        return LoginUser(token=token, user=user)