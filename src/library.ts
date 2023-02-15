import { AxiosRequest } from "./axiosRequest";
import { Userconfig } from "./globalInterface";
import { axiosconfigConstructor, nodeFetchconfigConstructor } from "./configConstructor";
import { nodeFetchRequest } from "./nodefetchRequest";
// import { retry } from "./Retry";
import { retry } from "./retryUpdated";
import { logger } from "./logger";

export interface BotReturn extends ResponseInit
{
    [index: string]: unknown;
}

export async function Bot(config: Userconfig): Promise<BotReturn>
{
    const requestmethods = ["get", "post", "put", "patch", "delete"];
    if (!requestmethods.includes(config.method))
    {
        return { message: "pass correct method", status: 405 };
    }

    //true for axios
    const state: boolean = config.usage === "axios" ? true : false;

    const retries: number = config.retries || 5;
    const COMPUTED_CONFIG = state
        ? await axiosconfigConstructor(config)
        : await nodeFetchconfigConstructor(config);

    const REQUIRED_FUNCTION = state ? AxiosRequest : nodeFetchRequest;
    let result: BotReturn;
    let time: number = Date.now();

    try
    {
        result = await retry(REQUIRED_FUNCTION, COMPUTED_CONFIG, retries, state);
        time = Date.now() - time;
        await logger(config, time, result);
        return result;
    }
    catch (error)
    {
        time = Date.now() - time;
        await logger(config, time, { message: "requestFailed" });
        throw error;
    }
}
