"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
const runningServer = () => {
    try {
        app_1.app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Problem in running server");
    }
};
runningServer();
