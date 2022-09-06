import { ISignupData, IUserOutputData } from "../../data-structures/user-data-interfaces.js";
import postgresql, { Postgresql } from "../../databases/postgresql.js";
import { IUsersRepository } from "../repositories-interfaces/users-repository-interface.js";

export class UsersPostgresqlRepository implements IUsersRepository {
    private postgresql: Postgresql = postgresql;

    async createUser({ email, password }: ISignupData): Promise<IUserOutputData> {
        return (await this.postgresql.pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email;',
            [email, password]
        )).rows[0];
    }

    async findUser(email: string): Promise<IUserOutputData> {
        return (await this.postgresql.pool.query(
            'SELECT id, email FROM users WHERE email = $1;',
            [email]
        )).rows[0];
    }

    async findUsers(): Promise<IUserOutputData[]> {
        return (await this.postgresql.pool.query(
            'SELECT id, email FROM users;'
        )).rows;
    }

    async deleteUsers(): Promise<IUserOutputData[]> {
        return (await this.postgresql.pool.query(
            'DELETE FROM users RETURNING id, email;'
        )).rows;
    }
}
