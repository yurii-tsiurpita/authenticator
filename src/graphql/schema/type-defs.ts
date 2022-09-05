import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        user(email: String!): User
        users: [User]
    }

    type Mutation {
        signup(email: String!, password: String!): User
    }

    type User {
        id: ID!
        email: String!
    }
`;