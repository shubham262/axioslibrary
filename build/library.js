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
exports.Bot = void 0;
const axiosRequest_1 = require("./axiosRequest");
const configConstructor_1 = require("./configConstructor");
const nodefetchRequest_1 = require("./nodefetchRequest");
// import { retry } from "./Retry";
const retryUpdated_1 = require("./retryUpdated");
const logger_1 = require("./logger");
function Bot(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestmethods = ["get", "post", "put", "patch", "delete"];
        if (!requestmethods.includes(config.method)) {
            return { message: "pass correct method", status: 405 };
        }
        //true for axios
        const state = config.usage === "axios" ? true : false;
        const retries = config.retries || 5;
        const COMPUTED_CONFIG = state
            ? yield (0, configConstructor_1.axiosconfigConstructor)(config)
            : yield (0, configConstructor_1.nodeFetchconfigConstructor)(config);
        const REQUIRED_FUNCTION = state ? axiosRequest_1.AxiosRequest : nodefetchRequest_1.nodeFetchRequest;
        let result;
        let time = Date.now();
        try {
            result = yield (0, retryUpdated_1.retry)(REQUIRED_FUNCTION, COMPUTED_CONFIG, retries, state);
            time = Date.now() - time;
            yield (0, logger_1.logger)(config, time, result);
            return result;
        }
        catch (error) {
            time = Date.now() - time;
            yield (0, logger_1.logger)(config, time, { message: "requestFailed" });
            throw error;
        }
    });
}
exports.Bot = Bot;
