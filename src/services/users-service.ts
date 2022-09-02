import { ISignupData, IUserOutputData } from "../data-structures/user-data-interfaces.js";
import { User } from "../entities/user-entity.js";
import { IUsersRepository } from "../repositories/repositories-interfaces/users-repository-interface.js";
import { IUsersService } from "./services-interfaces/users-service-interface.js";

export class UsersService implements IUsersService {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async signup({ email, password }: ISignupData): Promise<IUserOutputData> {
        const newUser = new User(email, password);
        return await this.usersRepository.createUser(newUser);
    }
    async getUsers(): Promise<IUserOutputData[]> {
        return await this.usersRepository.findUsers();
    }
}
