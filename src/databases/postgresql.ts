import pg, { Pool, PoolConfig } from "pg";

export class Postgresql {
    private poolConfig: PoolConfig = {connectionString: process.env.POSTGRESQL_CONNECTION_STRING};
    pool: Pool;

    async connect(): Promise<void> {
        try {
            this.pool = new pg.Pool(this.poolConfig);
            await this.pool.query('SELECT 1 + 1');
            
            console.log('[Postgresql] Database successfully connected');
        } catch (error) {
            if (error instanceof Error) {
                console.log(`[Postgresql] Database connection error: ${ error.message }`);
            }

            process.exit(1);
        }
    }
};

export default new Postgresql();
