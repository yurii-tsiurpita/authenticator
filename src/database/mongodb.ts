import { Db, MongoClient } from "mongodb";
import Logger from "../services/logger.js";
import { ILogger } from "../services/services-interfaces/logger-interface.js";

export class Mongodb {
    private client: MongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);
    db: Db = this.client.db();

    constructor(private logger: ILogger) {}

    async connect(): Promise<void> {
        try {
            await this.client.connect();

            this.logger.log('[Mongodb] Database successfully connected');
        } catch (error) {
            if (error instanceof Error) {
                this.logger.error(`[Mongodb] Database connection error: ${ error.message }`);
            }
            
            process.exit(1);
        }
    }
};

export default new Mongodb(
    new Logger()
);