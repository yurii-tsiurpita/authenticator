import { IPostgresql } from "../../types/database-types.js";
import { IPostgresqlUser, ISignupData, IUsersPostgresqlRepository } from "../../types/user-types.js";
import postgresql from "../../database/postgresql.js";

export class UsersPostgresqlRepository implements IUsersPostgresqlRepository {
    private postgresql: IPostgresql = postgresql;

    async createUser(signupData: ISignupData): Promise<IPostgresqlUser> {
        const result = await this.postgresql.createOne(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;',
            signupData
        );

        return result[0];
    }

    async findUsers(): Promise<IPostgresqlUser[]> {
        return await this.postgresql.findMany(
            'SELECT * FROM users'
        );
    }
}