"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Retry_1 = require("./Retry");
const app = (0, express_1.default)();
const config = {
    method: "get",
    baseURL: "https://httpbin.org",
    url: "/get",
    data: {},
    params: {
        ID: 12345
    },
};
(0, Retry_1.bot)(config)
    .then((data) => console.log("got the response indexts,", data))
    .catch((error) => console.log("I am in error,", error));
//wrap it inside async function
//then we can write 
// const result= await bot(config)
app.listen('3000', () => {
    console.log("server running at port 3000");
});
