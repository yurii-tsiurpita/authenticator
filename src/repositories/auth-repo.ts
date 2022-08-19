import { PostgresqlPool } from "../database/postgresql";
import { IAuthRepository, SignupData } from "../types/auth-types";

export class AuthRepository implements IAuthRepository {
    constructor(private postgresqlPool: PostgresqlPool) {}

    signup: (singupData: SignupData) => void;

    async insert(singupData: SignupData): Promise<void> {
        const response = await this.postgresqlPool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
            [singupData.email, singupData.password]
        );
    };
}