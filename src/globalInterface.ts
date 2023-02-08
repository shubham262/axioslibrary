
interface Signature {
    [index: string]: unknown;
  }

export interface Userconfig extends Signature{
    method:string;
    data?:object;
    baseURL?:string;
    url:string;
    params?:Signature;
    timeout?:number;
    retry?:boolean;
    retries?:number;
    usage?:string;
    headers?:HeadersInit;
    auth?:object;
    body?:BodyInit
}
