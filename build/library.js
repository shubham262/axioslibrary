"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const axiosRequest_1 = require("./axiosRequest");
const configConstructor_1 = require("./configConstructor");
const nodefetchRequest_1 = require("./nodefetchRequest");
const Retry_1 = require("./Retry");
function bot(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestmethods = ['get', 'post', 'put', 'patch', 'delete'];
        if (!requestmethods.includes(config.method)) {
            return { message: "pass correct method", status: 405 };
        }
        //true for axios
        let state = true;
        state = config.usage == 'axios' ? true : false;
        let result;
        let time = 0;
        let id = setInterval(() => {
            time++;
        }, 1);
        let retries = !config.retries ? 5 : config.retries;
        let computedconfig = state ? yield (0, configConstructor_1.axiosconfigConstructor)(config) : yield (0, configConstructor_1.nodeFetchconfigConstructor)(config);
        let requiredfunction = state ? axiosRequest_1.makeRequest : nodefetchRequest_1.nodeFetchRequest;
        try {
            result = yield (0, Retry_1.retry)(requiredfunction, computedconfig, retries, state ? "axios" : "node");
            clearInterval(id);
            console.table([{ method: config.method, url: config.url, date: new Date(), response: result, time: `${time}ms` }]);
        }
        catch (error) {
            clearInterval(id);
            console.table([{ method: config.method, url: config.url, date: new Date(), response: { message: "requestFailed" }, time: `${time}ms` }]);
            throw error;
        }
        return result;
    });
}
exports.bot = bot;
