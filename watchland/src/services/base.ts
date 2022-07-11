import { IApiProvider, IProviderGroup } from "../utils/interfaces";

export class BaseApiProvider implements IApiProvider{
    constructor(){
        
    }
    async apiCall(url: string): Promise<any> {
 
    }
    async getGroups(): Promise<IProviderGroup[]|[]>{
        return []
    }
    async getStream(streamId: string): Promise<void> {
     
    }      
}
