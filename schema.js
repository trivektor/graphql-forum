import gql from 'graphql-tag';

export const typeDefs = gql`
  type Query {
    forums: [Forum]
  }

  type Mutation {
    createForum(topic: String!, description: String!): Forum!
    deleteForum(id: ID!): Forum!
  }

  type Forum {
    id: ID!
    topic: String
    description: String
  }
`;
