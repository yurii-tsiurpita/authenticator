import { Request, Response, NextFunction } from "express";
import { ISignupData } from "../../data-structures/user-data-interfaces.js";
import { IUsersService } from "../../services/services-interfaces/users-service-interface.js";
import usersService from "../../services/users-service.js";

export class UsersController {
    private usersService: IUsersService = usersService;

    async signup(req: Request<{}, {}, ISignupData>, res: Response, next: NextFunction): Promise<void> {
        const newUser = await this.usersService.signup(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                newUser
            }
        });
    }

    async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        const users = await this.usersService.getUsers();

        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        });
    }
}

export default new UsersController();
