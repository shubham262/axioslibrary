import express from 'express'
import axiosObject from "./httplibrary"
const app=express()



const config={
    method:"get",
    url:"https://jsonplaceholder.typicode.com/posts",
    data:JSON.stringify({}),
    

}

// const datas= JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   })

// const config={
//     method:"POST",
//     url:"https://jsonplaceholder.typicode.com/posts",
//     data:datas,

// }


try {
    
    axiosObject.makeRequest(config,{name:"Shubham"})
    .then((data)=>console.log("got the response"))
    .catch((error)=>console.log("I am in error",error))  
} catch (error) {
    console.log("heree",error)
}





app.listen('3000',()=>{
    console.log("server running at port 3000")
})