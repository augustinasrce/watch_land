import { IApiProvider, IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class GoogleApiProvider extends BaseApiProvider{
    async getGroups(): Promise<IProviderGroup[]|[]> {
        console.log('Google groups')
        const response = await fetch("http://localhost:3004/google");
        return await response.json().then(response => {
          return response.groups;
        });
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
