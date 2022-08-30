import { ISignupData } from "../../data-structures/signup-data-interface.js";
import { IUserData } from "../../data-structures/user-data-interface.js";

export interface IAuthService {
    signup(signupData: ISignupData): Promise<IUserData>;
};