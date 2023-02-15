// import { Newfetchconfig } from "./configConstructor";
import fetch, { Response } from "node-fetch";
// import AbortError from "node-fetch";


interface NodeParams
{
    [key:string]:any
}

export async function nodeFetchRequest(object: NodeParams): Promise<Response>
{
    const AbortController = globalThis.AbortController || (await import("abort-controller"));
    const controller = new AbortController();

    object.newnodeconfig.signal = controller.signal;

    const timer = setTimeout(() =>
    {
        controller.abort();
    }, object.timeout);

    let response: Response;
    try
    {
        response = await fetch(object.url, object.newnodeconfig);
    }
    catch (error)
    {
        
        return Promise.reject({ message: "request was aborted", error, status: 500 }) as unknown as Response;
    }
    finally
    {
        clearTimeout(timer);
    }

    return response;
}
