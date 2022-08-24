import pg, { Pool, PoolConfig, QueryResult } from "pg";
import Logger from "../classes/logger.js";
import { ILogger } from "../types/logger-types.js";

export class Postgresql {
    private pool: Pool;

    constructor(private logger: ILogger) {}

    async connect(config: PoolConfig): Promise<void> {
        try {
            this.pool = new pg.Pool(config);
            await this.pool.query('SELECT 1 + 1');
            this.logger.log('[PostgresqlPool] Database successfully connected');
        } catch (error) {
            if (error instanceof Error) this.logger.error(`[PostgresqlPool] Database connection error: ${ error.message }`);
            throw error;
        }
    }

    async query(sql: string, values: any[]): Promise<QueryResult> {
        return await this.pool.query(sql, values);
    }
};

export default new Postgresql(
    new Logger()
);