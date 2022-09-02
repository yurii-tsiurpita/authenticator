import { Request, Response, NextFunction } from "express";
import { ISignupData } from "../../data-structures/user-data-interfaces.js";
import { UsersMongodbRepository } from "../../repositories/users-repositories/users-mongodb-repository.js";
import { UsersPostgresqlRepository } from "../../repositories/users-repositories/users-postgresql-repository.js";
import { IUsersService } from "../../services/services-interfaces/users-service-interface.js";
import { UsersService } from "../../services/users-service.js";

export class UsersController {
    private usersService: IUsersService = new UsersService(
        new UsersMongodbRepository()
    );

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
