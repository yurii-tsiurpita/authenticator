import { PostgresqlPool } from "../database/postgresql.js";
import { SignupData } from "../types/auth-types.js";

export class AuthService {
    constructor(private postgresqlPool: PostgresqlPool) {}

    validateUser() {
        console.log(this.postgresqlPool.smth)
    }
    
    createUser(newUserData: SignupData) {

    }
};