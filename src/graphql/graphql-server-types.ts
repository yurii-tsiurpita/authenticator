import { IAuthService } from "../services/services-interfaces/auth-service-interface.js";
import { IUsersService } from "../services/services-interfaces/users-service-interface.js";

export interface IContext {
    authService: IAuthService,
    usersService: IUsersService
}