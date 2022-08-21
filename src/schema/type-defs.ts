import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        hello: String
    }

    type Mutation {
        signup(email: String!, password: String!): User
    }

    type User {
        id: ID!
        email: String!
    }
`;