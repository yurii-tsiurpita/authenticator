import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        getUser(email: String!): User
        getUsers: [User]
    }

    type Mutation {
        signup(email: String!, password: String!): User
        deleteUsers: [User]
    }

    type User {
        id: ID!
        email: String!
    }
`;