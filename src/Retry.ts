import { BotReturn } from "./library";

//no of retries
export async function retry(
    callback: Function,
    parameters: object,
    retries: number,
    type: boolean
): Promise<BotReturn>
{
    const retryCodes = [408, 500, 502, 503, 504, 522, 524];

    return callback(parameters)
        .then((res: any) =>
        {
            if (res.status >= 200 && res.status < 300)
            {
                return type ? res.data : res.json();
            }
            else if (retries > 0 && retryCodes.includes(res.status))
            {
                console.log("re-Executing Request ,retryNo:", retries);
                return retry(callback, parameters, retries - 1, type);
            }
            else
            {
                throw res;
                // return reject(res);
            }
        })
        .catch((error: any) =>
        {
            throw error;
        });
}
