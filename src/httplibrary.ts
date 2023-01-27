import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export async function makeRequest(config:AxiosRequestConfig) {

    return new Promise((resolve, reject) => {

        if(config.method!=='get' && config.method!=='post' && config.method!=='put' && config.method!=='delete' && config.method!=='patch'){
            reject("Pass correct method")
        }


        
         //timing part
        let time:number=0
        let id=setInterval(()=>{
            time++
        },1) 

        axios(config).then((result)=>{
        clearInterval(id)
        //consoling the details
        console.table([{method:config.method,url:config.url,date:new Date(),response:result.data,time:`${time}ms`}])
        resolve(result.data)
        }).catch((err)=>{
        console.table([{method:config.method,url:config.url,date:new Date(),response:"failed"}])
        reject(err)})

    })
}