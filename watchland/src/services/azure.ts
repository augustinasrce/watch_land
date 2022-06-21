import { IApiProvider } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AzureApiProvider extends BaseApiProvider{

    async getGroups(): Promise<void>{
        console.log('AZURE GROUPS')
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
