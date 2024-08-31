import { getSdk } from '@/features/graphql/types';
import { GraphQLClient } from 'graphql-request';

const gqlClient = new GraphQLClient('http://localhost:8000/graphql');
export const sdk = getSdk(gqlClient);
