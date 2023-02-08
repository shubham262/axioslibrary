import express from 'express'
import {bot} from "./library"
const app=express()

const config={
    method:"get",
    baseURL:"https://httpbin.org",
    url:"/get",
    data:{ title: 'foo',body: 'bar',userId: 1,},
    params: {
        ID: 12345,
        
      },
      retry:true,
      retries:5,
      usage:"axios",
      timeout:5000
}


    bot(config)
    .then((data)=>console.log("got the response indexts,",data))
    .catch((error)=>console.log("I am in error,",error))  

    //wrap it inside async function
    //then we can write 
    // const result= await bot(config)

app.listen('3000',()=>{
    console.log("server running at port 3000")
})