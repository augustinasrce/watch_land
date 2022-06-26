import { IApiProvider, IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class GoogleApiProvider extends BaseApiProvider{
    async getGroups(): Promise<IProviderGroup[]|[]>{
        console.log('Google groups')
        return []
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
