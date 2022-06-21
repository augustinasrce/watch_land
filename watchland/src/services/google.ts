import { IApiProvider } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class GoogleApiProvider extends BaseApiProvider{
    async getGroups(): Promise<void>{
    }

    async getStream(streamId: string): Promise<void> {
        
    }
}
