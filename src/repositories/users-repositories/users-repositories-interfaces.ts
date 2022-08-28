import { ISignupData, IUser } from "../../entities/users/users-interfaces.js";

export interface IUsersRepository {
    createUser(signupData: ISignupData): Promise<IUser>;
    findUsers(): Promise<IUser[]>;
}