import { IUsersRepository } from "../repositories/repositories-interfaces/users-repository-interface.js";
import { IAuthService } from "./services-interfaces/auth-service-interface.js";
import { User } from "../entities/user-entity.js"
import { UsersPostgresqlRepository } from "../repositories/users-repositories/users-postgresql-repository.js";
import { UsersMongodbRepository } from "../repositories/users-repositories/users-mongodb-repository.js";
import { ISignupData, IUserOutputData } from "../data-structures/user-data-interfaces.js";

export class AuthService implements IAuthService {
    constructor(private usersRepository: IUsersRepository) {}

    async signup(signupData: ISignupData): Promise<IUserOutputData> {
        const newUser = new User(signupData.email, signupData.password);
        return await this.usersRepository.createUser(newUser);
    }
}

export default new AuthService(
    new UsersMongodbRepository()
)