import mongodb from "../../database/mongodb.js";
import { IMongodb } from "../../types/database-types.js";
import { IUser, IUsersRepository } from "../../types/user-types.js";

export class UsersMongodbRepository implements IUsersRepository {
    private mongodb: IMongodb = mongodb;
    private collectionName: string = 'users';
    
    async findUsers(): Promise<IUser[]> {
        return await this.mongodb.findMany(this.collectionName);
    }
}