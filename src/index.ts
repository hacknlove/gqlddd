import 'dotenv/config'
import { ApolloServer } from "apollo-server";
import { resolvers } from "./domains/resolvers";
import { typeDefs } from "./domains/typeDefs";

const server = new ApolloServer({
  typeDefs,
  csrfPrevention: true,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});