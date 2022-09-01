import { ISignupData, IUserOutputData } from "../../data-structures/user-data-interfaces.js";

export interface IUsersRepository {
    createUser(signupData: ISignupData): Promise<IUserOutputData>;
    findUsers(): Promise<IUserOutputData[]>;
}