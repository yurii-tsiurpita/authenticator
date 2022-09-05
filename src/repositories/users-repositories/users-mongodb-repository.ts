// import { IMongodbUserData, ISignupData, IUserOutputData } from "../../data-structures/user-data-interfaces.js";
// import mongodb, { Mongodb } from "../../databases/mongodb.js";
// import { IUsersRepository } from "../repositories-interfaces/users-repository-interface.js";

// export class UsersMongodbRepository implements IUsersRepository {
//     private mongodb: Mongodb = mongodb;
//     private usersCollection = this.mongodb.db.collection<IMongodbUserData>(process.env.MONGODB_USERS_COLLECTION_NAME!);

//     async createUser({ email, password }: ISignupData): Promise<IUserOutputData> {
//         const result = await this.usersCollection.insertOne({ email, password });
//         const newUser = await this.usersCollection.aggregate<IUserOutputData>([{
//             $match: { _id: result.insertedId }
//         }, {
//             $project: {
//                 id: '$_id',
//                 _id: 0,
//                 email: 1
//             }
//         }]).toArray();

//         if (!newUser.length) throw new Error('No user.');

//         return newUser[0];
//     }
    
//     async findUsers(): Promise<IUserOutputData[]> {
//         const users = await this.usersCollection
//             .find({})
//             .project<IUserOutputData>({
//                 id: '$_id',
//                 _id: 0,
//                 email: 1
//             })
//             .toArray();

//         if (!users.length) throw new Error('No users.');
        
//         return users;
//     }
// }