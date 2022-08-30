import { ISignupData } from "../../../data-structures/signup-data-interface.js";
import { IUserData } from "../../../data-structures/user-data-interface.js";
import { IContext } from "../../graphql-server-types.js";

export const Mutation = {
    async signup(obj: any, args: ISignupData, context: IContext, info: any): Promise<IUserData> {
        return await context.authService.signup(args);
    }
};