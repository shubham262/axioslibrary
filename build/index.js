"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const httplibrary_1 = __importDefault(require("./httplibrary"));
const app = (0, express_1.default)();
const config = {
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: JSON.stringify({}),
};
// const datas= JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })
// const config={
//     method:"POST",
//     url:"https://jsonplaceholder.typicode.com/posts",
//     data:datas,
// }
try {
    httplibrary_1.default.makeRequest(config, { name: "Shubham" })
        .then((data) => console.log("got the response"))
        .catch((error) => console.log("I am in error", error));
}
catch (error) {
    console.log("heree", error);
}
app.listen('3000', () => {
    console.log("server running at port 3000");
});
