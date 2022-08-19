import apolloServer from "./apollo-server.js";
import Logger from "./classes/logger.js";
import { Server } from "./classes/server.js";
import postgre, { PostgresqlPool } from "./database/postgresql.js";
import { AuthRepository } from "./repositories/auth-repo.js";
import { AuthService } from "./services/auth-service.js";

const server = new Server(
    new Logger(),
    apolloServer,
    postgre
);

server.run();

const userRepo = new AuthRepository(
    new PostgresqlPool(
        new Logger()
    )
);

userRepo.insert({email: 'email', password: 'pass'});