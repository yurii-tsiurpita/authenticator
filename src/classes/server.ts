import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";

import { Postgresql } from "../database/postgresql.js";
import { ILogger } from "../types/logger-types.js";

export class Server {
    private port: number = 3033;
    private server: Express = express();

    constructor (
        private logger: ILogger,
        private apolloServer: ApolloServer,
        private postgresql: Postgresql
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

            await this.apolloServer.start();
            this.apolloServer.applyMiddleware({ app: this.server });

            this.server.listen(this.port, () => {
                this.logger.log(`[Server] Server runs at http://localhost:${this.port}`);
            });
        } catch (error) {
            if (error instanceof Error) this.logger.error(`[Server] Server startup error: ${ error.message }`);
            process.exit(1);
        }
    }
};