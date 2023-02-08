"use strict";
//calbackfunction with its parameters
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
//no of retries
function retry(callback, parameters, retries, type) {
    return __awaiter(this, void 0, void 0, function* () {
        const retryCodes = [408, 500, 502, 503, 504, 522, 524];
        return new Promise((resolve, reject) => {
            return callback(parameters)
                .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    type == 'axios' ? resolve(res.data) : resolve(res.json());
                }
                else if (retries > 0 && retryCodes.includes(res.status)) {
                    console.log("re-Executing Request ,retryNo:", retries);
                    return retry(callback, parameters, retries - 1, type);
                }
                else {
                    return reject(res);
                }
            }).catch((error) => { console.log("hello"); reject(error); });
        });
    });
}
exports.retry = retry;
