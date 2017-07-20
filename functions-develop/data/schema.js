import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './api';

const schema = `
  type User {
    id: ID!
    name: String!
    surname: String!
    age: Int!
    friends: [User]
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    createUser(name: String!, surname: String!, age: Int!): User
    friendUser(current: ID!, friend: ID!): User
  }
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
})
