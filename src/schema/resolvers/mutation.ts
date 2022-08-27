import { UsersPostgresqlRepository } from "../../repositories/users-repositories/usersPostgresqlRepository.js";
import { AuthService } from "../../services/auth-service.js";
import { ISignupData, IUser } from "../../types/user-types.js";

const authService: AuthService = new AuthService(
    new UsersPostgresqlRepository()
);

export const Mutation = {
    async signup(obj: any, args: ISignupData, context: any, info: any): Promise<IUser> {
        return await authService.signup(args);
    }
};