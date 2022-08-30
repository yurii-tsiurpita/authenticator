import { IUserData } from "../../data-structures/user-data-interface.js";
import mongodb, { Mongodb } from "../../databases/mongodb.js";
import { IUsersRepository } from "../repositories-interfaces/users-repository-interface.js";

export class UsersMongodbRepository implements IUsersRepository {
    private mongodb: Mongodb = mongodb;
    private usersCollection = this.mongodb.db.collection<IUserData>(process.env.MONGODB_USERS_COLLECTION_NAME!);

    async createUser(signupData: IUserData): Promise<IUserData> {
        const result = await this.usersCollection.insertOne(signupData);
        const newUser = await this.usersCollection.findOne({ _id: result.insertedId });
        if (!newUser) throw new Error('No user.');
        newUser.id = newUser._id.toString();
        return newUser;
    }
    
    async findUsers(): Promise<IUserData[]> {
        const users = await this.usersCollection.find({}).toArray();
        if (!users.length) throw new Error('No users.');
        users.forEach(user => user.id = user._id.toString());
        return users;
    }
}