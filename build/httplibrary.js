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
exports.makeRequest = void 0;
const axios_1 = __importDefault(require("axios"));
function makeRequest(config) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (config.method !== 'get' && config.method !== 'post' && config.method !== 'put' && config.method !== 'delete' && config.method !== 'patch') {
                reject("Pass correct method");
            }
            //timing part
            let time = 0;
            let id = setInterval(() => {
                time++;
            }, 1);
            (0, axios_1.default)(config).then((result) => {
                clearInterval(id);
                //consoling the details
                console.table([{ method: config.method, url: config.url, date: new Date(), response: result.data, time: `${time}ms` }]);
                resolve(result.data);
            }).catch((err) => {
                console.table([{ method: config.method, url: config.url, date: new Date(), response: "failed" }]);
                reject(err);
            });
        });
    });
}
exports.makeRequest = makeRequest;
