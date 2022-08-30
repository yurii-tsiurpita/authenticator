import { IUserData } from "../../data-structures/user-data-interface.js";

export interface IUsersService {
    getUsers(): Promise<IUserData[]>;
}