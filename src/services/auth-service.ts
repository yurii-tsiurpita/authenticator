import { ISignupData } from "../data-structures/signup-data-interface.js";
import { IUserData } from "../data-structures/user-data-interface.js";
import { IUsersRepository } from "../repositories/repositories-interfaces/users-repository-interface.js";
import { IAuthService } from "./services-interfaces/auth-service-interface.js";
import { User } from "../entities/user-entity.js"
import { UsersPostgresqlRepository } from "../repositories/users-repositories/users-postgresql-repository.js";
import { UsersMongodbRepository } from "../repositories/users-repositories/users-mongodb-repository.js";

export class AuthService implements IAuthService {
    constructor(private usersRepository: IUsersRepository) {}

    async signup(signupData: ISignupData): Promise<IUserData> {
        const newUser = new User(signupData.email, signupData.password);
        return await this.usersRepository.createUser(newUser);
    }
}

export default new AuthService(
    new UsersPostgresqlRepository()
)