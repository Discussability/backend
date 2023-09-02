"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const endpointController = require("./controllers/controller");
const app = (0, express_1.default)();
const port = 8080;
app.use("/", endpointController);
app.get("/hello", (req, res) => {
    res.send("somehwer");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
