import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import Query from "./resolvers/query.js";
import { Mutation } from "./resolvers/mutation.js";
import { AuthService } from "./services/auth-service.js";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: new Query(),
        // Mutation: new Mutation()
    },
    context: {
        text: 'This is context!',
        smth: 'some text'
    }
});

export default apolloServer;