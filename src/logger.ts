import { Userconfig } from "./globalInterface";
import { BotReturn } from "./library";
export async function logger(config:Userconfig,time:number,result:BotReturn):Promise<void>
{


    console.table([
        {
            method: config.method,
            url: config.url,
            date: new Date(),
            response: result,
            time: `${time}ms`
        }
    ]);

}