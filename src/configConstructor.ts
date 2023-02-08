import {Userconfig} from "./globalInterface"
import { AxiosRequestConfig } from "axios";
import  { RequestInit } from 'node-fetch'
interface Signature {
    [index: string]: unknown;
  }

export interface NewAxiosConfig extends AxiosRequestConfig {
    [index: string]: unknown;
  }

export interface Newfetchconfig extends RequestInit {
    [index: string]: unknown;

}

export interface fun extends Newfetchconfig{
    url:string,

}

let newaxiosconfig:NewAxiosConfig={
 timeout:5000,
}

 let newnodeconfig:Newfetchconfig={}


export async function axiosconfigConstructor(config:Userconfig){

   
    for(const key in config){
        
        if(key=='retry'||key=='retries'||key=='usage'){
        continue
        }
        
        newaxiosconfig[key]=config[key]
    }

    return newaxiosconfig


}
function fetchAbsolute(baseURL:string="",url:string,params:Signature={}):string {
    let absoulte=baseURL.length>0?baseURL+url:url
    absoulte+='?'
    for(const key in params){
        absoulte+=`${key}=`
        absoulte+=params[key]
    }
    return absoulte
}


export async function nodeFetchconfigConstructor(config:Userconfig):Promise<fun>{

newnodeconfig.method=config.method;
config.method!=='get'?newnodeconfig.body=JSON.stringify(config.data):"";
let timeout:number=config.timeout?config.timeout:5000
const url=fetchAbsolute(config.baseURL,config.url,config.params)

return {url,newnodeconfig,timeout}

}