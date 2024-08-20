import { Header } from '@/features/ui/layout/Header';

import { GraphQLClient } from 'graphql-request';
import { getSdk } from "@/features/graphql/types";

const gqlClient = new GraphQLClient('http://localhost:8000/graphql');
const sdk = getSdk(gqlClient);

export default function Home() {

  console.log('Header');

  async function login(email: string, password: string) {
    const res = await sdk.login({ email, password });
    console.log(res);
  }
  return (
    <main>
      <Header />
      <button onClick={() => login('test@test.com', 'test')}>Login</button>
    </main>
  );
}
