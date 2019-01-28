import { ApolloServer, makeExecutableSchema, addSchemaLevelResolveFunction } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import {
  Forum,
} from './datasources';

// https://www.apollographql.com/docs/apollo-server/api/graphql-tools.html
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

addSchemaLevelResolveFunction(schema, () => {});

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    forum: new Forum(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
