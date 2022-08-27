import { IUser, IUsersRepository, IUsersService } from "../types/user-types.js";

export class UsersService implements IUsersService {
    constructor(private usersRepository: IUsersRepository) {}

    async getUsers(): Promise<IUser[]> {
        return await this.usersRepository.findUsers();
    }
}