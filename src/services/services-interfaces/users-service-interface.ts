import { IUser } from "../../entities/users/users-interfaces";

export interface IUsersService {
    getUsers(): Promise<IUser[]>;
}