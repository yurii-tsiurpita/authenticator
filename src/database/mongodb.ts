import { Db, MongoClient } from "mongodb";
import Logger from "../services/logger.js";
import { IMongodb } from "../types/database-types.js";
import { ILogger } from "../types/logger-types.js";

export class Mongodb implements IMongodb {
    private client: MongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);
    private db: Db = this.client.db();

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

    async findMany(collectionName: string): Promise<any> {
        return await this.db.collection(collectionName).find({}).toArray();
    }
};

export default new Mongodb(
    new Logger()
);