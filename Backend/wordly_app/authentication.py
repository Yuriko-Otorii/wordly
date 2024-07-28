from graphene import Mutation, Field, String
from django.contrib.auth import get_user_model, authenticate
from graphql_jwt.shortcuts import get_token
from .types import UserType

class CreateUser(Mutation):
    user = Field(UserType)
    token = String()

    class Arguments:
        username = String(required=True)
        email = String(required=True)
        password = String(required=True)

    def mutate(self, info, username, email, password):
        user = get_user_model()(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()

        token = get_token(user)

        return CreateUser(user=user, token=token)

class LoginUser(Mutation):
    token = String()
    user = Field(UserType)

    class Arguments:
        email = String(required=True)
        password = String(required=True)

    def mutate(self, info, email, password):
        user = authenticate(username=email, password=password)

        if user is None:
            raise Exception('Invalid credentials')

        token = get_token(user)

        return LoginUser(token=token, user=user)