import { IUserData } from "../data-structures/user-data-interface.js";
import { IUsersRepository } from "../repositories/repositories-interfaces/users-repository-interface.js";
import { UsersMongodbRepository } from "../repositories/users-repositories/users-mongodb-repository.js";
import { UsersPostgresqlRepository } from "../repositories/users-repositories/users-postgresql-repository.js";
import { IUsersService } from "./services-interfaces/users-service-interface.js";

export class UsersService implements IUsersService {
    constructor(private usersRepository: IUsersRepository) {}

    async getUsers(): Promise<IUserData[]> {
        return await this.usersRepository.findUsers();
    }
}

export default new UsersService(
    new UsersPostgresqlRepository()
)