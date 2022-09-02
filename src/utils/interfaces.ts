export interface IApiProvider{
    apiCall(url:string):Promise<any>
    getGroups():Promise<IProviderGroup[]|[]> 
    getStream(streamId:string):Promise<void> 
}

export interface IProviderGroup{
    id: number
    stream: string
    lastEvent: string
}
export interface IProviderProps {
    groups:IProviderGroup[]
}
