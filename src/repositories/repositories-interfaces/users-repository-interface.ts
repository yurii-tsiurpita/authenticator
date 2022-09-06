import { ISignupData, IUserOutputData } from "../../data-structures/user-data-interfaces.js";

export interface IUsersRepository {
    createUser(signupData: ISignupData): Promise<IUserOutputData>;
    findUser(email: string): Promise<IUserOutputData>;
    findUsers(): Promise<IUserOutputData[]>;
    deleteUsers(): Promise<IUserOutputData[]>;
}