import { IPostgresqlUser, ISignupData } from "./user-types.js";

export interface IPostgresql {
    createOne(sql: string, data: ISignupData): Promise<IPostgresqlUser[]>;
    findMany(sql: string): Promise<IPostgresqlUser[]>;
}

export interface IMongodb {
    findMany(collectionName: string): Promise<any>;
}