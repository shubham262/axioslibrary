
//calbackfunction with its parameters

import { Axios, AxiosResponse } from "axios"
import { Response } from "express"
import {BotReturn} from "./library"

//no of retries
export async function retry(callback:Function,parameters:object,retries:number,type:string):Promise<BotReturn> {
    
    const retryCodes = [408, 500, 502, 503, 504, 522, 524]
    return new Promise((resolve, reject) => {

        return callback(parameters)
        .then((res:any)=>{
            
            if(res.status>=200 && res.status<300){
               
                type=='axios'?resolve(res.data):resolve(res.json())
            }

           else if (retries > 0 && retryCodes.includes(res.status)) {
                console.log("re-Executing Request ,retryNo:",retries)
                return retry(callback,parameters, retries - 1,type)
              }
            else {
               
                return reject(res)
               
              }
        }).catch((error:Error)=>{ console.log("hello");reject(error)})

    })
}