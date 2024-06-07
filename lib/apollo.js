import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from "apollo-link-http";
export const client = new ApolloClient({
  link: createHttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL}),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development'
});

