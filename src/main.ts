import 'dotenv/config';
import { App } from "./express/app.js";

(async () => {
    const server = new App();
    await server.run();
})();

//f1
//f2