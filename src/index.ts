import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/index.js";

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query
    }
});

server
    .listen({
        port: 2022
    })
    .then(serverInfo => {
        console.log(`Server is listening at ${serverInfo.url}`);
    })
    .catch(error => {
        console.log('ERROR')
    })