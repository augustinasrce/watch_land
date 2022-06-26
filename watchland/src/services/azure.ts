import { IApiProvider, IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AzureApiProvider extends BaseApiProvider{

    async getGroups(): Promise<IProviderGroup[]|[]>{
        console.log('AZURE GROUPS')
        return []
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
