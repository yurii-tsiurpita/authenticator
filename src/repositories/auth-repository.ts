import { QueryResult } from "pg";
import postgresql, { Postgresql } from "../database/postgresql.js";
import { SignupData } from "../types/auth-types.js";

export class AuthRepository {
    private postgresql: Postgresql = postgresql;

    async insert(singupData: SignupData): Promise<QueryResult> {
        return await this.postgresql.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;',
            [singupData.email, singupData.password]
        );
    };
}