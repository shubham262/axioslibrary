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
exports.nodeFetchconfigConstructor = exports.axiosconfigConstructor = void 0;
const newaxiosconfig = {
    timeout: 5000
};
const newnodeconfig = {};
function axiosconfigConstructor(config) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const key in config) {
            if (key == "retry" || key == "retries" || key == "usage") {
                continue;
            }
            newaxiosconfig[key] = config[key];
        }
        return newaxiosconfig;
    });
}
exports.axiosconfigConstructor = axiosconfigConstructor;
function fetchAbsolute(baseURL = "", url, params = {}) {
    let absoulte = baseURL.length > 0 ? baseURL + url : url;
    absoulte += "?";
    for (const key in params) {
        absoulte += `${key}=`;
        absoulte += params[key];
    }
    return absoulte;
}
function nodeFetchconfigConstructor(config) {
    return __awaiter(this, void 0, void 0, function* () {
        newnodeconfig.method = config.method;
        config.method !== "get" ? (newnodeconfig.body = JSON.stringify(config.data)) : "";
        const timeout = config.timeout || 5000;
        const url = fetchAbsolute(config.baseURL, config.url, config.params);
        return { url, newnodeconfig, timeout };
    });
}
exports.nodeFetchconfigConstructor = nodeFetchconfigConstructor;
