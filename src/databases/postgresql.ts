import pg, { Pool, PoolConfig } from "pg";
import Logger from "../services/logger.js";
import { ILogger } from "../services/services-interfaces/logger-interface.js";

export class Postgresql {
    private poolConfig: PoolConfig = {connectionString: process.env.POSTGRESQL_CONNECTION_STRING};
    pool: Pool;

    constructor(private logger: ILogger) {}

    async connect(): Promise<void> {
        try {
            this.pool = new pg.Pool(this.poolConfig);
            await this.pool.query('SELECT 1 + 1');
            
            this.logger.log('[Postgresql] Database successfully connected');
        } catch (error) {
            if (error instanceof Error) {
                this.logger.error(`[Postgresql] Database connection error: ${ error.message }`);
            }

            process.exit(1);
        }
    }
};

export default new Postgresql(
    new Logger()
);