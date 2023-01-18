import axios from 'axios'

class axiosHandler{

    public count: any;
    constructor(){
    this.count=0
    }
   
    async makeRequest(config:{method:string,url:string,data?:string}){
    try {
       
        
        let time:number=0
        //timing part
        let id=setInterval(()=>{
            time++
        },1) 
            
            const result:any=await axios({...config,timeout:1000})
            clearInterval(id)
            //consoling the details
            console.table([{method:config.method,url:config.url,date:new Date(),response:result.data,time:`${time}ms`}])
            
            return result.data
        
        } catch (error) {
        //retrying part
        if(this.count<5){
            console.log("hi",this.count)
            this.count++
            await this.makeRequest(config)
        }
        
        return error
        
        } 

      
}
}


const obj=new axiosHandler()
export default obj;