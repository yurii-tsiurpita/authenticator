import { IUserData } from "../../data-structures/user-data-interface.js";
import { User } from "../../entities/user-entity.js";

export interface IUsersRepository {
    createUser(signupData: User): Promise<IUserData>;
    findUsers(): Promise<IUserData[]>;
}