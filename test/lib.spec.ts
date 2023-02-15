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
  

    it("get method", async function () {
        config.method = "get";
        config.url = "/get";

        const result = await Bot(config);
        expect(result.args).to.deep.equal({ ID: "12345" });
    });

    it("post method", async function () {
        config.method = "post";
        config.url = "/post";
        config.data = { title: "foo", body: "bar", userId: 1 };

        const result = await Bot(config);
        expect(result.args).to.deep.equal({ ID: "12345" });
    });

    it("delete method", async function () {
        config.method = "delete";
        config.url = "/delete";

        const result = await Bot(config);

        expect(result.args).to.deep.equal({ ID: "12345" });
    });

    it("put method", async function () {
        config.method = "put";
        config.url = "/put";
        config.data = { title: "foo", body: "bar", userId: 1 };

        const result = await Bot(config);
        expect(result.args).to.deep.equal({ ID: "12345" });
    });

    it("patch method", async function () {
        config.method = "patch";
        config.url = "/patch";
        config.data = { title: "foo", body: "bar", userId: 1 };

        const result = await Bot(config);
        expect(result.args).to.deep.equal({ ID: "12345" });
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

    

    it(" post method ", async function () {
        config.method = "post";
        config.url = "/post";
        const result = await Bot(config);

        expect(result).to.be.an("object");
    });

    it(" delete method", async function () {
        config.method = "delete";
        config.url = "/delete";
        const result = await Bot(config);
        expect(result).to.be.an("object");
    });

    it("put method", async function () {
        config.method = "put";
        config.url = "/put";
        const result = await Bot(config);
        expect(result).to.be.an("object");
    });
});
