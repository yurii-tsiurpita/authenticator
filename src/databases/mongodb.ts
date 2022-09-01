import { Db, MongoClient } from "mongodb";

export class Mongodb {
    private client: MongoClient = new MongoClient(process.env.MONGODB_CONNECTION_STRING!);
    db: Db = this.client.db(process.env.DB_NAME);

    async connect(): Promise<void> {
        try {
            await this.client.connect();

            console.log('[Mongodb] Database successfully connected');
        } catch (error) {
            if (error instanceof Error) {
                console.log(`[Mongodb] Database connection error: ${ error.message }`);
            }
            
            process.exit(1);
        }
    }
};

export default new Mongodb();
