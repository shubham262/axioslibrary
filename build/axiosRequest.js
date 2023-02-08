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
        // const controller = new AbortController();
        // config.signal=controller.signal
        // const timer = setTimeout(() => {
        //     controller.abort();
        // }, config.timeout);
        let result;
        try {
            result = yield (0, axios_1.default)(config);
        }
        catch (error) {
            return { message: 'request failed', error, status: 500 };
        }
        return result;
    });
}
exports.makeRequest = makeRequest;
