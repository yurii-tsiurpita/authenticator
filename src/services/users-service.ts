import { IUser } from "../entities/users/users-interfaces.js";
import { IUsersRepository } from "../repositories/users-repositories/users-repositories-interfaces.js";
import { IUsersService } from "./services-interfaces/users-service-interface.js";

export class UsersService implements IUsersService {
    constructor(private usersRepository: IUsersRepository) {}

    async getUsers(): Promise<IUser[]> {
        return await this.usersRepository.findUsers();
    }
}