import { ISignupData, IUser } from "../entities/users/users-interfaces.js";
import { IUsersRepository } from "../repositories/users-repositories/users-repositories-interfaces.js";

export class AuthService {
    constructor(private usersRepository: IUsersRepository) {}

    async signup(signupData: ISignupData): Promise<IUser> {
        return await this.usersRepository.createUser(signupData);
    }
};