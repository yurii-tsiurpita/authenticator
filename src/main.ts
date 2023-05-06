import 'dotenv/config';
import { App } from "./express/app.js";

(async () => {
    const server = new App();
    await server.run();
})();

//f1
//f2
//f3
const f4 = 'f4';