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
const { Bot } = require("../build/library");
const chai = require("chai");
const expect = chai.expect;
const config = {
    method: "get",
    baseURL: "https://httpbin.org",
    url: "",
    data: {},
    params: {
        ID: 12345
    },
    retry: true,
    retries: 5,
    usage: "node",
    timeout: 5000
};
// it('works', function(done) {
//     get('http://httpbin.org/get?answer=42').
//       then(res => {
//         assert.equal(res.data.args.answer, 42);
//         // `done()` with no parameters means the test succeeded
//         done();
//       }).
//       // If you pass a parameter to `done()`, Mocha considers that an error
//       catch(err => done(err));
//   });
describe("testing the using http bin", function () {
    it("get method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "get";
            config.url = "/get";
            const result = yield Bot(config);
            expect(result.args).to.deep.equal({ ID: "12345" });
        });
    });
    it("post method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "post";
            config.url = "/post";
            config.data = { title: "foo", body: "bar", userId: 1 };
            const result = yield Bot(config);
            expect(result.args).to.deep.equal({ ID: "12345" });
        });
    });
    it("delete method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "delete";
            config.url = "/delete";
            const result = yield Bot(config);
            expect(result.args).to.deep.equal({ ID: "12345" });
        });
    });
    it("put method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "put";
            config.url = "/put";
            config.data = { title: "foo", body: "bar", userId: 1 };
            const result = yield Bot(config);
            expect(result.args).to.deep.equal({ ID: "12345" });
        });
    });
    it("patch method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "patch";
            config.url = "/patch";
            config.data = { title: "foo", body: "bar", userId: 1 };
            const result = yield Bot(config);
            expect(result.args).to.deep.equal({ ID: "12345" });
        });
    });
    // });
    // describe("testing the library", function ()
    // {
    // it(" get method", async function () {
    //     config.method = "get";
    //     config.url = "/get";
    //     const result = await Bot(config);
    //     expect(result).to.be.an("object");
    // });
    it(" post method ", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "post";
            config.url = "/post";
            const result = yield Bot(config);
            expect(result).to.be.an("object");
        });
    });
    it(" delete method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "delete";
            config.url = "/delete";
            const result = yield Bot(config);
            expect(result).to.be.an("object");
        });
    });
    it("put method", function () {
        return __awaiter(this, void 0, void 0, function* () {
            config.method = "put";
            config.url = "/put";
            const result = yield Bot(config);
            expect(result).to.be.an("object");
        });
    });
});
