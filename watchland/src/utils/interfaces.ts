export interface IApiProvider{
    apiCall(url:string):Promise<any>
    getGroups():Promise<void> // declare the interface of the response
    getStream(streamId:string):Promise<void> // declare the interface of the response
}