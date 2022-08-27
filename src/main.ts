import 'dotenv/config';
import { ApolloServer } from "apollo-server-express";
import Logger from "./services/logger.js";
import { App } from "./root/app.js";
import { Mutation } from "./schema/resolvers/mutation.js";
import { typeDefs } from "./schema/type-defs.js";
import { Query } from "./schema/resolvers/query.js";

(async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers: {
            Query,
            Mutation
        }
    });
    
    const server = new App(
        new Logger(),
        apolloServer
    );
    
    await server.run();
})();