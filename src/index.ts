import { ApolloServer } from "apollo-server";
import { Logger } from "./classes/logger.js";
import { Server } from "./classes/server.js";
import { Query } from "./resolvers/query.js";
import { typeDefs } from "./schema.js";

const server = new Server(
    new Logger(),
    new ApolloServer({
        typeDefs,
        resolvers: {
            Query
        }
    })
)

server.run();