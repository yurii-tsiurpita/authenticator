import { AuthService } from "../../services/auth-service.js";
import { SignupData } from "../../types/auth-types.js";
import { IUser } from "../../types/user-types.js";

const authService: AuthService = new AuthService();

export const Mutation = {
    async signup(obj: any, args: SignupData, context: any, info: any): Promise<IUser> {
        const result =  await authService.signup(args);
        return result[0];
    }
};