#axioslibrary
A library that can handle your all kind of request.It make use of Axios internally.A single place to handle all your request.

#Github


#Installation
npm i axioslibrary

#Usage
you need to require it first
const axiosHandler=require("axioslibrary")

extract the object from the library
const handler=axiosHandler.default

make a request

create an object,as below
const config={
    method:"get",
    url:"https://jsonplaceholder.typicode.com/posts",
    data:JSON.stringify({}),
    

}
handler.makeRequest(config)