import { IUsersService } from "../services/services-interfaces/users-service-interface.js";

export interface IContext {
    usersService: IUsersService;
}