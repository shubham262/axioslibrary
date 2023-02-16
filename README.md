# axioslibrary
#### A library that can handle your all kind of request .It make use of Axios and node-fetch internally to reduce your dependency on third party libraries.A single place to handle all your request. It also notes the time in which your api sends the response,keep notes of all request and response and also has retrying feature,means if api fails,it will retry certain number of  times (default 5)

### Github link:- https://github.com/shubham262/axioslibrary
### Package link:- https://www.npmjs.com/package/axioslibrary


## Features:

* Uses Axios and Node-fetch internally to make request and reduce your dependency on library directly.

* User can either use Axios or Node-fetch.

* Logs the incoming request with its response and Keep all the information of the request

* Has the timing feature, notes the time taken by the api to respond to the request.

* Has the retrying feature, if the request fails  due to certain reasons and response has status code like [408, 500, 502, 503, 504, 522, 524],the library will        make request again and again ,by default 5 times and return the final result. Users can also set no of retries.

* Has timeout feature, which automatically cancels the request ,if the api took more than 5seconds.This timeout can also be defined by the users.



## Installation
* npm i axioslibrary
### Require the package 
* const {bot}=require("axioslibrary")
### or you can also use
* import {bot} from “axioslibrary“
###### Create a config as per your need
 * const config={<br />
  method:"get",<br />
    baseURL:"https://httpbin.org",<br />
    url:"/get",<br />
    data:{ title: 'foo',body: 'bar',userId: 1,},<br />
    params: {<br />
        ID: 12345,<br />
        
      },<br />
      retry:true,<br />
      retries:5,<br />
      usage:"axios",<br />
      timeout:5000<br />
}<br />

###### You can mention also use node-fetch instead of axios just by changing usage from axios to  node.

###### You can use asycn/await or Promises approach to call the function
* async function makeRequest() {<br />
  try {<br />
    const response = await bot(config);<br />
    console.log(response);<br />
  } catch (error) {<br />
    console.error(error);<br />
  }<br />
}<br />
* bot(config).then((data)=>{<br />
    console.log(data)<br />
}).catch((errror)=>console.log(error))<br />


