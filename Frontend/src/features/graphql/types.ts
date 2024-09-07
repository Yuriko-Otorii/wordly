import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user: UserType;
  wordSet: Array<WordType>;
};

export type CreateCategory = {
  __typename?: 'CreateCategory';
  category?: Maybe<CategoryType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

export type CreateWord = {
  __typename?: 'CreateWord';
  word?: Maybe<WordType>;
};

export type DefinitionChoiceType = {
  __typename?: 'DefinitionChoiceType';
  definition?: Maybe<Scalars['String']['output']>;
  isCorrect?: Maybe<Scalars['Boolean']['output']>;
};

export type DefinitionType = {
  __typename?: 'DefinitionType';
  definition: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  word: WordType;
};

export type DeleteWord = {
  __typename?: 'DeleteWord';
  word?: Maybe<WordType>;
};

export type LoginUser = {
  __typename?: 'LoginUser';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CreateCategory>;
  createWord?: Maybe<CreateWord>;
  deleteWord?: Maybe<DeleteWord>;
  login?: Maybe<LoginUser>;
  signup?: Maybe<CreateUser>;
  updateMemoryProcess?: Maybe<UpdateMemoryProcess>;
  updateWord?: Maybe<UpdateWord>;
};


export type MutationCreateCategoryArgs = {
  categoryName: Scalars['String']['input'];
};


export type MutationCreateWordArgs = {
  categoryName: Scalars['String']['input'];
  definition: Array<InputMaybe<Scalars['String']['input']>>;
  example?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  partsOfSpeech?: InputMaybe<Scalars['String']['input']>;
  pronunciation?: InputMaybe<Scalars['String']['input']>;
  word: Scalars['String']['input'];
};


export type MutationDeleteWordArgs = {
  wordId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateMemoryProcessArgs = {
  wordId: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdateWordArgs = {
  categoryName?: InputMaybe<Scalars['String']['input']>;
  definition?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  example?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  partsOfSpeech?: InputMaybe<Scalars['String']['input']>;
  pronunciation?: InputMaybe<Scalars['String']['input']>;
  word?: InputMaybe<Scalars['String']['input']>;
  wordId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<CategoryType>>>;
  definition?: Maybe<DefinitionType>;
  getFlashcardWordsFromAllCategories?: Maybe<Array<Maybe<WordType>>>;
  getFlashcardsByCategory?: Maybe<Array<Maybe<WordTestType>>>;
  getFlashcardsByDate?: Maybe<Array<Maybe<WordTestType>>>;
  getWordTestByMemoryProcess?: Maybe<Array<Maybe<Array<Maybe<WordTestType>>>>>;
  getWordsByCategory?: Maybe<Array<Maybe<WordType>>>;
  getWordsByUserId?: Maybe<Array<Maybe<WordType>>>;
  users?: Maybe<Array<Maybe<UserType>>>;
  words?: Maybe<Array<Maybe<WordType>>>;
};


export type QueryCategoriesArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDefinitionArgs = {
  wordId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetFlashcardsByCategoryArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetFlashcardsByDateArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetWordsByCategoryArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateMemoryProcess = {
  __typename?: 'UpdateMemoryProcess';
  words?: Maybe<Array<Maybe<WordType>>>;
};

export type UpdateWord = {
  __typename?: 'UpdateWord';
  word?: Maybe<WordType>;
};

export type UserType = {
  __typename?: 'UserType';
  categories: Array<CategoryType>;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
  wordSet: Array<WordType>;
};

export type WordTestType = {
  __typename?: 'WordTestType';
  definitionChoices?: Maybe<Array<Maybe<DefinitionChoiceType>>>;
  word?: Maybe<WordType>;
};

export type WordType = {
  __typename?: 'WordType';
  category: CategoryType;
  createdDate: Scalars['DateTime']['output'];
  definitions: Array<DefinitionType>;
  example?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isFavorite: Scalars['Boolean']['output'];
  memoryProcess: Scalars['Int']['output'];
  nextMemoryTestDate: Scalars['DateTime']['output'];
  partsOfSpeech?: Maybe<Scalars['String']['output']>;
  pronunciation?: Maybe<Scalars['String']['output']>;
  testCount: Scalars['Int']['output'];
  user: UserType;
  word: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginUser', token?: string | null, user?: { __typename?: 'UserType', id: string, username: string, email: string } | null } | null };

export type SignupMutationVariables = Exact<{
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'CreateUser', token?: string | null, user?: { __typename?: 'UserType', id: string, username: string, email: string } | null } | null };


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      username
      email
    }
  }
}
    `;
export const SignupDocument = gql`
    mutation signup($username: String!, $email: String!, $password: String!) {
  signup(username: $username, email: $email, password: $password) {
    token
    user {
      id
      username
      email
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>(LoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'login', 'mutation', variables);
    },
    signup(variables: SignupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SignupMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignupMutation>(SignupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'signup', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;