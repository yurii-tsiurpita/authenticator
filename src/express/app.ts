import express, { Express } from "express";
import postgresql, { Postgresql } from "../databases/postgresql.js";
import mongodb, { Mongodb } from "../databases/mongodb.js";
import graphqlServer from "../graphql/graphql-server.js";
import { ApolloServer } from "apollo-server-express";
import { IDatabase } from "../databases/databases-interfaces/database-interface.js";

export class App {
    private port: number = 3033;

    private app: Express = express();
    private graphqlServer: ApolloServer = graphqlServer;

    private postgresql: IDatabase = postgresql;
    private mongodb: IDatabase = mongodb;

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

            await this.graphqlServer.start();
            this.graphqlServer.applyMiddleware({ app: this.app });

            this.setViews();
            this.useMiddlewares();
            this.useRoutes();
            this.app.listen(this.port);
            
            console.log(`[Server] Server runs at http://localhost:${this.port}`);
        } catch (error) {
            if (error instanceof Error) {
                console.log(`[Server] Server startup error: ${ error.message }`);
            }

            process.exit(1);
        }
    }
};