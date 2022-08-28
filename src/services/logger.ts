import { ILogger } from "./services-interfaces/logger-interface.js";

class Logger implements ILogger {
    log(message: string): void {
        console.log(message);
    }

    error(message: string): void {
        console.error(message);
    }
};

export default Logger;