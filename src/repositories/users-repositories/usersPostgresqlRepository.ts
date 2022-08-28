import { ISignupData, IUser } from "../../entities/users/users-interfaces.js";
import postgresql, { Postgresql } from "../../database/postgresql.js";
import { IUsersRepository } from "./users-repositories-interfaces.js";

export class UsersPostgresqlRepository implements IUsersRepository {
    private postgresql: Postgresql = postgresql;

    async createUser(signupData: ISignupData): Promise<IUser> {
        return (await this.postgresql.pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;',
            [signupData.email, signupData.password]
        )).rows[0];
    }

    async findUsers(): Promise<IUser[]> {
        return (await this.postgresql.pool.query(
            'SELECT * FROM users'
        )).rows;
    }
}