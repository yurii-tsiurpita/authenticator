import 'dotenv/config';
import Logger from "./services/logger.js";
import { App } from "./express/app.js";

(async () => {
    const server = new App(
        new Logger()
    );
    
    await server.run();
})();