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
exports.retry = void 0;
function retry(callback, parameters, retries, type) {
    return __awaiter(this, void 0, void 0, function* () {
        const retryCodes = [408, 500, 502, 503, 504, 522, 524];
        let result;
        let i = 1;
        while (i <= retries) {
            try {
                console.log(`Executing the request for the ${i}th time`);
                result = yield callback(parameters);
                result = type ? result.data : result.json();
                return result;
            }
            catch (error) {
                const statusCode = error.status || error.response.status;
                result = error;
                if (retryCodes.includes(statusCode))
                    i++;
                else {
                    throw result;
                }
            }
        }
        throw result;
    });
}
exports.retry = retry;
