import { BotReturn } from "./library";

export async function retry(
    callback: Function,
    parameters: object,
    retries: number,
    type: boolean
): Promise<BotReturn>
{
    const retryCodes = [408, 500, 502, 503, 504, 522, 524];
    let result;
    let i = 1;
    
    while (i <= retries)
    {
        try
        {
            console.log(`Executing the request for the ${i}th time`);
            result = await callback(parameters);
            result = type ? result.data : result.json();
            
            return result;
        }
        catch (error: any)
        {
            const statusCode = error.status || error.response.status;
            result = error;
            if (retryCodes.includes(statusCode)) i++;
            else
            {
                throw result;
            }
        }
    }
    
    throw result;
}
