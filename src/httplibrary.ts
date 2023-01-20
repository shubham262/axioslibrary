import axios from 'axios'

class axiosHandler{

    public count: any;
    
    constructor(){
    this.count=0
    
    }
   
    async makeRequest(config:{method:string,url:string,data?:string},params?:any){
    try {
        
        if(config.method=='post'||config.method=='put'||config.method=='patch'){
            if(!config.data ||  Object.keys(JSON.parse(config.data)).length==0){
                console.log("hi")
                return "data not passed,please pass data after stringifying it"
            }
        }
        //changing url according to params
        if(params && !config.url.includes('?')){
            config.url+="?"
            for(let i in params){
            let y =params[i] 
            config.url+=`${i}=${y}&`
            }
            
        }
        
        //timing part
        let time:number=0
        let id=setInterval(()=>{
            time++
        },1) 
            
        const result:any=await axios({...config,timeout:5000})
        clearInterval(id)
        //consoling the details
        console.table([{method:config.method,url:config.url,date:new Date(),response:result.data,time:`${time}ms`}])
            
        return result.data
        
        } catch (error) {
        //retrying part
        if(this.count<5){
            console.log("api is working slow",this.count)
            this.count++
            await this.makeRequest(config,params)
        }
        
        return error
        
        } 
}
}


const obj=new axiosHandler()
export default obj;