import {Newfetchconfig} from "./configConstructor"
import fetch from 'node-fetch';
import AbortError from "node-fetch"
export async function nodeFetchRequest(object:any):Promise<any>{
    const AbortController = globalThis.AbortController || await import('abort-controller')
    const controller = new AbortController();
   
    object.newnodeconfig.signal=controller.signal
    
    const timer = setTimeout(() => {
        controller.abort();
    }, object.timeout);
    
    let response;
    try {
         response = await fetch(object.url,object.newnodeconfig);
       
    } catch (error) {
      
        return  {message:'request was aborted',error,status:500};
       
    } finally {
        clearTimeout(timer);
    }
    
    return response
    
}