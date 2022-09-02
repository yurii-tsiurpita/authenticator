import express, { Router } from "express";
import { UsersController } from "../controllers/users-controller.js";

export class UsersRouter {
    router: Router = express.Router();
    private controller: UsersController = new UsersController();

    constructor() {
        this.router
            .route('/')
            .get(this.controller.getUsers.bind(this.controller))
            .post(this.controller.signup.bind(this.controller));
    }
}
