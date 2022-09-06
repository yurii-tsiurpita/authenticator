import { ISignupData, IUserFindingData, IUserOutputData } from "../../../data-structures/user-data-interfaces.js";
import { IContext } from "../../graphql-server-types.js";

export const Query = {
    async getUser(obj: any, args: IUserFindingData, context: IContext, info: any): Promise<IUserOutputData> {
        return await context.usersService.getUser(args.email);
    },

    async getUsers(obj: any, args: any, context: IContext, info: any): Promise<IUserOutputData[]> {
        return await context.usersService.getUsers();
    }
};