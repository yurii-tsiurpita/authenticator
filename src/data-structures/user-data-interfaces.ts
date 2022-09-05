export interface ISignupData {
    email: string;
    password: string;
}

export interface IUserFindingData {
    email: string;
}

export interface IUserOutputData {
    id: string;
    email: string;
}

export interface IMongodbUserData extends ISignupData {}

export interface IPostgresqlUserData extends ISignupData {
    id: string;
}
