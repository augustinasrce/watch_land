import { IApiProvider, IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AzureApiProvider extends BaseApiProvider{

    async getGroups(): Promise<IProviderGroup[]|[]>{
        console.log('AZURE GROUPS')
        const response = await fetch("http://localhost:3004/azure");
        return await response.json().then(response => {
          return response.groups;
        });
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
