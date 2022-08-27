import { IPostgresqlUser, ISignupData, IUsersRepository } from "../types/user-types.js";

export class AuthService {
    constructor(private usersRepository: IUsersRepository) {}

    async signup(signupData: ISignupData): Promise<IPostgresqlUser> {
        return await this.usersRepository.createUser(signupData) as Promise<IPostgresqlUser>;
    }
};