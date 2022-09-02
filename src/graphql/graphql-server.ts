import { ApolloServer } from "apollo-server-express";
import { Mutation } from "./schema/resolvers/mutation.js";
import { typeDefs } from "./schema/type-defs.js";
import { Query } from "./schema/resolvers/query.js";
import { UsersService } from "../services/users-service.js";
import { UsersPostgresqlRepository } from "../repositories/users-repositories/users-postgresql-repository.js";

export default new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    },
    context: {
        usersService: new UsersService(
            new UsersPostgresqlRepository()
        )
    }
});
