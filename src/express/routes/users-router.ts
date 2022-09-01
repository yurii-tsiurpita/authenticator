import express, { Router } from "express";
import usersController, { UsersController } from "../controllers/users-controller.js";

export class UsersRouter {
    router: Router = express.Router();
    private controller: UsersController = usersController;

    constructor() {
        this.router
            .route('/')
            .get(this.controller.getUsers.bind(this.controller))
            .post(this.controller.signup.bind(this.controller));
    }
}

export default new UsersRouter();
