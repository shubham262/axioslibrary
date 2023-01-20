# axioslibrary
#### A library that can handle your all kind of request .It make use of Axios internally.A single place to handle all your request. It also notes the time in which yoour api sends the response,keep notes of all request and response and also has retrying feature,means if api fails,it will retry max 5 times

### Github link:- https://github.com/shubham262/axioslibrary
### Package link:- https://www.npmjs.com/package/axioslibrary

## Installation
#### npm i axioslibrary
### Require the package 
###### const axiosHandler=require("axioslibrary")
###### extract the object from the library 
###### const handler=axiosHandler.default
###### make a request by creating  an object,as below 

###### const config={ method:"get",
###### url:"https://jsonplaceholder.typicode.com/posts",
###### data:JSON.stringify({send your data here})
###### }

###### It also accepts params object ,if you want to send it as an object
###### params={name:"abc"}

###### const result=await handler.makeRequest(config,params)
###### Make sure to enclose the request within async function
