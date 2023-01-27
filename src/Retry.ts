import { AxiosRequestConfig } from "axios";
import {makeRequest} from "./httplibrary"

export async function bot(config:AxiosRequestConfig){
    let count=1
    config.timeout=5000
    let errrr;
    while(count<=5){
        

        try {
            const result=await makeRequest(config)
             
            return result  
        } catch (err) {
            errrr=err
            count++
            
        }
        
    }

    return errrr
}