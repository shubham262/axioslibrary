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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class axiosHandler {
    constructor() {
        this.count = 0;
    }
    makeRequest(config, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (config.method == 'post' || config.method == 'put' || config.method == 'patch') {
                    if (!config.data || Object.keys(JSON.parse(config.data)).length == 0) {
                        console.log("hi");
                        return "data not passed,please pass data after stringifying it";
                    }
                }
                //changing url according to params
                if (params && !config.url.includes('?')) {
                    config.url += "?";
                    for (let i in params) {
                        let y = params[i];
                        config.url += `${i}=${y}&`;
                    }
                }
                //timing part
                let time = 0;
                let id = setInterval(() => {
                    time++;
                }, 1);
                const result = yield (0, axios_1.default)(Object.assign(Object.assign({}, config), { timeout: 5000 }));
                clearInterval(id);
                //consoling the details
                console.table([{ method: config.method, url: config.url, date: new Date(), response: result.data, time: `${time}ms` }]);
                return result.data;
            }
            catch (error) {
                //retrying part
                if (this.count < 5) {
                    console.log("api is working slow", this.count);
                    this.count++;
                    yield this.makeRequest(config, params);
                }
                return error;
            }
        });
    }
}
const obj = new axiosHandler();
exports.default = obj;
