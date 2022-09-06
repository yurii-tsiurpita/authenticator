import { ISignupData, IUserOutputData } from "../data-structures/user-data-interfaces.js";
import { IUsersRepository } from "../repositories/repositories-interfaces/users-repository-interface.js";
import { IUsersService } from "./services-interfaces/users-service-interface.js";

export class UsersService implements IUsersService {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async signup(signupData: ISignupData): Promise<IUserOutputData> {
        const existingUser = await this.usersRepository.findUser(signupData.email);

        if (existingUser) {
            throw new Error('User with given email already exists.');
        }

        return await this.usersRepository.createUser(signupData);
    }

    async getUser(email: string): Promise<IUserOutputData> {
        const user = await this.usersRepository.findUser(email);

        if (!user) {
            throw new Error('Cannot find any user.');
        }

        return user;
    }

    async getUsers(): Promise<IUserOutputData[]> {
        const users =  await this.usersRepository.findUsers();

        if (!users.length) {
            throw new Error('Cannot find any user.');
        }

        return users;
    }

    async deleteUsers(): Promise<IUserOutputData[]> {
        const deletedUsers = await this.usersRepository.deleteUsers();

        if (!deletedUsers.length) {
            throw new Error('There are no users to delete.');
        }

        return deletedUsers;
    }
}
