import { AxiosRequestConfig } from "axios";
import {makeRequest} from "./axiosRequest"
import {Userconfig} from "./globalInterface"
import {axiosconfigConstructor,nodeFetchconfigConstructor,NewAxiosConfig,Newfetchconfig,fun} from "./configConstructor"
import {nodeFetchRequest} from "./nodefetchRequest"
import {retry} from "./Retry"

export interface BotReturn extends ResponseInit{
    [index: string]: unknown;
}

export async function bot(config:Userconfig):Promise<BotReturn>{


        const requestmethods = ['get','post','put','patch','delete']
        if(!requestmethods.includes(config.method)){
            return {message:"pass correct method",status:405}
        }


    //true for axios
    let state:boolean=true
     state=config.usage=='axios'?true:false
    let result:BotReturn;

    let time:number=0
    let id=setInterval(()=>{
        time++
    },1) 
    let retries:number=!config.retries?5:config.retries
    let computedconfig=state?await axiosconfigConstructor(config):await nodeFetchconfigConstructor(config)

    let requiredfunction:Function=state?makeRequest:nodeFetchRequest;


    try {
        result=await retry(requiredfunction,computedconfig,retries,state?"axios":"node");
        clearInterval(id);
        
        console.table([{method:config.method,url:config.url,date:new Date(),response:result,time:`${time}ms`}]);  
    } catch (error) {
        clearInterval(id);
        console.table([{method:config.method,url:config.url,date:new Date(),response:{message:"requestFailed"},time:`${time}ms`}]);  
        
        throw error
    }

    return result

} 