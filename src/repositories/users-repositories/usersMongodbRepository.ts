import mongodb, { Mongodb } from "../../database/mongodb.js";
import { IMongodbUser, ISignupData, IUser } from "../../entities/users/users-interfaces.js";
import { IUsersRepository } from "./users-repositories-interfaces.js";

export class UsersMongodbRepository implements IUsersRepository {
    private mongodb: Mongodb = mongodb;
    private collection = this.mongodb.db.collection<IMongodbUser>('users');

    async createUser(signupData: ISignupData): Promise<IUser> {
        const result = await this.collection.insertOne(signupData);
        const newUser = await this.collection.findOne({ _id: result.insertedId });
        newUser['id'] = newUser?._id.toString();
    }
    
    async findUsers(): Promise<IUser[]> {
        const users = await this.collection.find({}).toArray();
        return users.map(user => {
            return {
                id: user._id.toString(),
                email: user.email,
                password: user.password
            }
        });
    }
}