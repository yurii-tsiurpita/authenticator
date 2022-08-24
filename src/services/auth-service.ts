import { AuthRepository } from "../repositories/auth-repository.js";
import { SignupData } from "../types/auth-types.js";

export class AuthService {
    private authRepository: AuthRepository = new AuthRepository();

    async signup(newUserData: SignupData) {
        const result = await this.authRepository.insert(newUserData);
        console.log(result.rows);
        return result.rows;
    }
};