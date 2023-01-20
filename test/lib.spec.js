const axiosObject=require("../build/httplibrary")
const chai=require('chai')
const expect=chai.expect


describe('testing the library', function () {
    
it(" get method",async function(){
const handler=axiosObject.default
const result= await handler.makeRequest({ method:"get",url:"https://jsonplaceholder.typicode.com/posts",data:JSON.stringify({}),})
expect(result).to.be.an('array')
})


it(" post method when data is not passed",async function(){
    const handler=axiosObject.default
    const result= await handler.makeRequest({ method:"post",url:"https://jsonplaceholder.typicode.com/posts",data:JSON.stringify({}),})
    
    expect(result).to.be.equal('data not passed,please pass data after stringifying it')
    })

    it(" post method ",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"post",url:"https://jsonplaceholder.typicode.com/posts",data:JSON.stringify({ title: 'foo',body: 'bar',userId: 1,}),})
        
        expect(result).to.be.an('object')
        })

     it(" delete method",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"delete",url:"https://jsonplaceholder.typicode.com/posts/1",data:JSON.stringify({}),})
        expect(result).to.be.an('object')
        })


    it("put method",async function(){
            const handler=axiosObject.default
            const result= await handler.makeRequest({ method:"put",url:"https://jsonplaceholder.typicode.com/posts/1",data:JSON.stringify({id: 1,title: 'foo',body: 'bar',userId: 1,})})
            expect(result).to.be.an('object')
            })


});


describe('testing the using http bin', function () {
    it("get method",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"get",url:"https://httpbin.org/get",data:JSON.stringify({})},{name:"Shubham"})
        expect(result.args).to.deep.equal({name:"Shubham"})
    })
    
    it("post method",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"post",url:"https://httpbin.org/post",data:JSON.stringify({ title: 'foo',body: 'bar',userId: 1,})},{name:"Shubham"})
        expect(result.args).to.deep.equal({name:"Shubham"})
    })

    it("delete method",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"delete",url:"https://httpbin.org/delete",data:JSON.stringify({})},{name:"Shubham"})
        expect(result.args).to.deep.equal({name:"Shubham"})
    })

    it("put method",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"put",url:"https://httpbin.org/put",data:JSON.stringify({ title: 'foo',body: 'bar',userId: 1,})},{name:"Shubham"})
        expect(result.args).to.deep.equal({name:"Shubham"})
    })

    it("patch method",async function(){
        const handler=axiosObject.default
        const result= await handler.makeRequest({ method:"patch",url:"https://httpbin.org/patch",data:JSON.stringify({ title: 'foo',body: 'bar',userId: 1,})},{name:"Shubham"})
        expect(result.args).to.deep.equal({name:"Shubham"})
    })




})