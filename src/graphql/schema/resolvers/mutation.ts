import { ISignupData, IUserOutputData } from "../../../data-structures/user-data-interfaces.js";
import { IContext } from "../../graphql-server-types.js";

export const Mutation = {
    async signup(obj: any, args: ISignupData, context: IContext): Promise<IUserOutputData> {
        return await context.usersService.signup(args);
    },

    async deleteUsers(obj: any, args: any, context: IContext): Promise<IUserOutputData[]> {
        return await context.usersService.deleteUsers();
    }
};