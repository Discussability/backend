"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router = express_1.default.Router();
const jsonParser = body_parser_1.default.json();
// post request contains login info (email+password?)
// - should pass info into a generate token function that verifies if it matches account
// - should return a JSON containing token + refreshtoken that has user identification
router.post("/login", jsonParser, (req, res) => {
    console.log(req.body);
    try {
        // const returnToken = Token.createJWT()
    }
    catch (_a) {
        console.log("oopsie error joe mama");
    }
});
router.get("/test", (req, res) => {
    res.send("test");
});
module.exports = router;
