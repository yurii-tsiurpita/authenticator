import { ApolloServer } from "apollo-server";
import { PostgresqlPool } from "../database/postgresql.js";
import { ILogger } from "../types/logger-types.js";

export class Server {
    private port: number = 3033;

    constructor (
        private logger: ILogger,
        private apolloServer: ApolloServer,
        private postgresql: PostgresqlPool
    ) {}

    async run(): Promise<void> {
        try {
            await this.postgresql.connect({
                host: 'localhost',
                port: 5432,
                database: 'authenticator',
                user: 'postgres',
                password: 'postgresql'
            });

            const { url } = await this.apolloServer.listen({ port: this.port });
            this.logger.log(`[Server] Server runs at ${ url }`);
            console.log(this.postgresql.smth)
        } catch (error) {
            if (error instanceof Error) this.logger.error(`[Server] Server startup error: ${ error.message }`);
        }
    }
};