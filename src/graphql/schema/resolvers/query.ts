import { ISignupData } from "../../../data-structures/user-data-interfaces.js";
import { IContext } from "../../graphql-server-types.js";

export const Query = {
    async users(obj: any, args: ISignupData, context: IContext, info: any) {
        return await context.usersService.getUsers();
    }
};