import { ISignupData, IUserOutputData } from "../../data-structures/user-data-interfaces.js";

export interface IUsersService {
    signup(signupData: ISignupData): Promise<IUserOutputData>;
    getUser(email: string): Promise<IUserOutputData>;
    getUsers(): Promise<IUserOutputData[]>;
}