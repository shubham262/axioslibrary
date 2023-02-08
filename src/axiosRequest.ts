import axios, { AxiosError, AxiosResponse } from 'axios'
import {NewAxiosConfig} from "./configConstructor"

export async function makeRequest(config:NewAxiosConfig):Promise<object> {
    // const controller = new AbortController();
    // config.signal=controller.signal

    // const timer = setTimeout(() => {
    //     controller.abort();
    // }, config.timeout);
    
    let result:AxiosResponse
    try {
        result=await axios(config)
    } catch (error:any) {
        
        return  {message:'request failed',error,status:500};
    }
       
    return result
            
}