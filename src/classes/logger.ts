import { ILogger } from "../types/logger-types.js";

export class Logger implements ILogger {
    log(message: string): void {
        console.log(message);
    }
}