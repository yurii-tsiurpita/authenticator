import { ApolloServer } from "apollo-server-express";

import Logger from "./classes/logger.js";
import { App } from "./classes/app.js";
import postgresql from "./database/postgresql.js";
import { Mutation } from "./schema/resolvers/mutation.js";
import { typeDefs } from "./schema/type-defs.js";
import { Query } from "./schema/resolvers/query.js";

(async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers: {
            Query: Query,
            Mutation: Mutation
        }
    });
    
    const server = new App(
        new Logger(),
        apolloServer,
        postgresql
    );
    
    await server.run();
})();