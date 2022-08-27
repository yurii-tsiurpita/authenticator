export interface ISignupData {
    email: string;
    password: string;
}

export interface IUser extends ISignupData {
    id: string;
}

export interface IPostgresqlUser extends ISignupData {
    id: number;
}

export interface IMongodbUser extends ISignupData {
    _id: string;
}

export interface IUsersService {
    getUsers(): Promise<IUser[]>;
}

export interface IUsersRepository {
    createUser(signupData: ISignupData): Promise<IPostgresqlUser | IMongodbUser>;
    findUsers(): Promise<IPostgresqlUser[] | IMongodbUser[]>;
}

export interface IUsersPostgresqlRepository extends IUsersRepository {
    createUser(signupData: ISignupData): Promise<IPostgresqlUser>;
    findUsers(): Promise<IPostgresqlUser[]>;
}

export interface IUsersMongodbRepository extends IUsersRepository {
    createUser(signupData: ISignupData): Promise<IMongodbUser>;
    findUsers(): Promise<IMongodbUser[]>;
}