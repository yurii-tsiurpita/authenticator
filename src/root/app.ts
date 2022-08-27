import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { PoolConfig } from "pg";
import postgresql, { Postgresql } from "../database/postgresql.js";
import { ILogger } from "../types/logger-types.js";
import mongodb, { Mongodb } from "../database/mongodb.js";

export class App {
    private port: number = 3033;
    private app: Express = express();
    private postgresql: Postgresql = postgresql;
    private mongodb: Mongodb = mongodb;

    constructor (
        private logger: ILogger,
        private apolloServer: ApolloServer
    ) {}

    private setViews(): void {
        this.app.set('views', './views');
        this.app.set('view engine', 'ejs');
    }

    private useMiddlewares(): void {
        this.app.use(express.static('public'));
    }

    private useRoutes(): void {
        this.app.use('/', (req, res) => {
            res.render('main');
        });
    }

    async run(): Promise<void> {
        try {
            await this.postgresql.connect();
            await this.mongodb.connect();

            await this.apolloServer.start();
            this.apolloServer.applyMiddleware({ app: this.app });

            this.setViews();
            this.useMiddlewares();
            this.useRoutes();
            this.app.listen(this.port);
            
            this.logger.log(`[Server] Server runs at http://localhost:${this.port}`);
        } catch (error) {
            if (error instanceof Error) {
                this.logger.error(`[Server] Server startup error: ${ error.message }`);
            }

            process.exit(1);
        }
    }
};