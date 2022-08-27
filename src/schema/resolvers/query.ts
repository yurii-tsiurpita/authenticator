import { UsersMongodbRepository } from "../../repositories/users-repositories/usersMongodbRepository.js";
import { UsersPostgresqlRepository } from "../../repositories/users-repositories/usersPostgresqlRepository.js";
import { UsersService } from "../../services/users-service.js";

const usersService = new UsersService(
    new UsersMongodbRepository()
);

export const Query = {
    async users() {
        return await usersService.getUsers();
    }
};
