import pg, { Pool, PoolConfig } from "pg";
import Logger from "../classes/logger.js";
import { ILogger } from "../types/logger-types.js";

export class PostgresqlPool {
    private pool: Pool;
    smth: number = 1;

    constructor(private logger: ILogger) {}

    async connect(config: PoolConfig): Promise<void> {
        try {
            this.pool = new pg.Pool(config);
            this.smth = 2;
            await this.pool.query('SELECT 1 + 1');
            this.logger.log('[PostgresqlPool] Database successfully connected');
        } catch (error) {
            if (error instanceof Error) this.logger.error(`[PostgresqlPool] Database connection error: ${ error.message }`);
            process.exit();
        }
    }

    async query(sql: string, values: any[]): Promise<void> {
        await this.pool.query(sql, values)
    }
};

export default new PostgresqlPool(
    new Logger()
);