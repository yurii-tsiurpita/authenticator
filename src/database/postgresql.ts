import pg, { Pool, PoolConfig, QueryResult } from "pg";
import Logger from "../services/logger.js";
import { IPostgresql } from "../types/database-types.js";
import { ILogger } from "../types/logger-types.js";
import { IPostgresqlUser, ISignupData } from "../types/user-types.js";

export class Postgresql implements IPostgresql {
    private pool: Pool;
    private poolConfig: PoolConfig = {
        connectionString: process.env.POSTGRESQL_CONNECTION_STRING
    };

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

    async createOne(sql: string, data: ISignupData): Promise<IPostgresqlUser[]> {
        const { email, password } = data;
        const { rows } = await this.pool.query(sql, [email, password]) as QueryResult<IPostgresqlUser>;
        return rows;
    }

    async findMany(sql: string): Promise<IPostgresqlUser[]> {
        const { rows } = await this.pool.query(sql) as QueryResult<IPostgresqlUser>;
        return rows;
    }
};

export default new Postgresql(
    new Logger()
);