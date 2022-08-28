export interface IMongodbUser {
    email: string;
    password: string;
    _id: string;
}

export interface ISignupData extends IMongodbUser {}

export interface IUser {
    email: string;
    password: string;
    id: string;
}
