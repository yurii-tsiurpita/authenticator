import { ApolloServer } from "apollo-server";
import { ILogger } from "../types/logger-types.js";

export class Server {
    port: number = 3033;

    constructor (
        public logger: ILogger,
        public apolloServer: ApolloServer
    ) {}

    async run(): Promise<void> {
        const { url } = await this.apolloServer.listen({port: this.port});
        this.logger.log(`Server runs at ${ url }`);
    }
}