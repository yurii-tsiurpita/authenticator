import { ISignupData, IUserOutputData } from "../../../data-structures/user-data-interfaces.js";
import { IContext } from "../../graphql-server-types.js";

export const Mutation = {
    async signup(obj: any, args: ISignupData, context: IContext, info: any): Promise<IUserOutputData> {
        return await context.authService.signup(args);
    }
};