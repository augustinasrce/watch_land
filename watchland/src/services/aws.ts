import { IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AwsApiProvider extends BaseApiProvider{

    async getGroups(): Promise<IProviderGroup[]|[]>{
        return []
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
