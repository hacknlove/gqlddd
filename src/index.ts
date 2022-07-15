import 'dotenv/config'
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';

import { resolvers } from "./domains/resolvers";
import { typeDefs } from "./domains/typeDefs";

const server = new ApolloServer({
  typeDefs,
  csrfPrevention: true,
  resolvers,
  plugins: [
    process.env.NODE_ENV === 'production'
    ? ApolloServerPluginLandingPageDisabled()
    : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});