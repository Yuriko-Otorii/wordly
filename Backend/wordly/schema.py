import graphene
from graphql_jwt.middleware import JSONWebTokenMiddleware
import wordly_app.schema

class Query(wordly_app.schema.Query, graphene.ObjectType):
    pass

class Mutation(wordly_app.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
