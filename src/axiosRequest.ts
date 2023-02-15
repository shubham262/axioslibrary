import axios, { AxiosResponse } from "axios";
import { NewAxiosConfig } from "./configConstructor";

export async function AxiosRequest(config: NewAxiosConfig): Promise<AxiosResponse>
{
    // const controller = new AbortController();
    // config.signal=controller.signal

    // const timer = setTimeout(() => {
    //     controller.abort();
    // }, config.timeout);

    let result: AxiosResponse;
    try
    {
        result = await axios(config);
    }
    catch (error: any)
    {
        if (error.code === 'ECONNABORTED')
            throw { message: "request failed", error, status: 500 };

        throw error;
    }

    return result;
}
