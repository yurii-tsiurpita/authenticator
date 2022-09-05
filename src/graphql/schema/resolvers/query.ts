import { ISignupData, IUserFindingData, IUserOutputData } from "../../../data-structures/user-data-interfaces.js";
import { IContext } from "../../graphql-server-types.js";

export const Query = {
    async user(obj: any, args: IUserFindingData, context: IContext, info: any): Promise<IUserOutputData> {
        return await context.usersService.getUser(args.email);
    },

    async users(obj: any, args: any, context: IContext, info: any): Promise<IUserOutputData[]> {
        return await context.usersService.getUsers();
    }
};