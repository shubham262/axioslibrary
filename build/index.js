"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const library_1 = require("./library");
const app = (0, express_1.default)();
const config = {
    method: "get",
    baseURL: "https://httpbin.org/",
    url: "/get",
    data: { title: "foo", body: "bar", userId: 1 },
    params: {
        ID: 12345
    },
    retry: true,
    retries: 5,
    usage: "axios",
    timeout: 5000
};
(0, library_1.Bot)(config)
    .then(data => console.log("got the response indexts,", data))
    .catch(error => console.log("I am in error,", error));
//wrap it inside async function
//then we can write
// const result= await bot(config)
app.listen("3000", () => {
    console.log("server running at port 3000");
});
