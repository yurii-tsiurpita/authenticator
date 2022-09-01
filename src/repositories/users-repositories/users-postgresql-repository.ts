import { ISignupData, IUserOutputData } from "../../data-structures/user-data-interfaces.js";
import postgresql, { Postgresql } from "../../databases/postgresql.js";
import { IUsersRepository } from "../repositories-interfaces/users-repository-interface.js";

export class UsersPostgresqlRepository implements IUsersRepository {
    private postgresql: Postgresql = postgresql;

    async createUser(signupData: ISignupData): Promise<IUserOutputData> {
        return (await this.postgresql.pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;',
            [signupData.email, signupData.password]
        )).rows[0];
    }

    async findUsers(): Promise<IUserOutputData[]> {
        return (await this.postgresql.pool.query(
            'SELECT * FROM users;'
        )).rows;
    }
}