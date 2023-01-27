const {makeRequest}=require("../build/httplibrary")
const  {bot} =require("../build/Retry")

const chai=require('chai')
const expect=chai.expect


describe('testing the library', function () {
    
    it(" get method",async function(){
    
    const result= await bot({ method:"get",url:"https://jsonplaceholder.typicode.com/posts",data:JSON.stringify({}),})
    expect(result).to.be.an('array')
    })




    it(" post method ",async function(){
        
        const result= await bot({ method:"post",url:"https://jsonplaceholder.typicode.com/posts",data:JSON.stringify({ title: 'foo',body: 'bar',userId: 1,}),})
        
        expect(result).to.be.an('object')
        })

     it(" delete method",async function(){
        
        const result= await bot({ method:"delete",url:"https://jsonplaceholder.typicode.com/posts/1",data:JSON.stringify({}),})
        expect(result).to.be.an('object')
        })


    it("put method",async function(){
        
            const result= await bot({ method:"put",url:"https://jsonplaceholder.typicode.com/posts/1",data:JSON.stringify({id: 1,title: 'foo',body: 'bar',userId: 1,})})
            expect(result).to.be.an('object')
            })


});


describe('testing the using http bin', function () {

    const config={
        method:"",
        baseURL:"https://httpbin.org",
        url:"",
        data:{},
        params: {
            ID: '12345'
          },
    
    }
    it("get method",async function(){
        config.method="get"
        config.url="/get"
        
        const result= await bot(config)
        expect(result.args).to.deep.equal({ID: '12345'})
    })
    
    it("post method",async function(){
        config.method="post"
        config.url="/post"
        config.data={ title: 'foo',body: 'bar',userId: 1,}
        
        const result= await bot(config)
        expect(result.args).to.deep.equal({ID: '12345'})
    })

    it("delete method",async function(){
        config.method="delete"
        config.url="/delete"
        
        const result= await bot(config)

        expect(result.args).to.deep.equal({ID: '12345'})
    })

    it("put method",async function(){
        config.method="put"
        config.url="/put"
        config.data={ title: 'foo',body: 'bar',userId: 1,}
        
        const result= await bot(config)
        expect(result.args).to.deep.equal({ID: '12345'})
    })

    it("patch method",async function(){
        config.method="patch"
        config.url="/patch"
        config.data={ title: 'foo',body: 'bar',userId: 1,}
        
        const result= await bot(config)
        expect(result.args).to.deep.equal({ID: '12345'})
    })




})