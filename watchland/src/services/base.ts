import { IApiProvider } from "../utils/interfaces";

export class BaseApiProvider implements IApiProvider{
    constructor(){}
    async apiCall(url: string): Promise<any> {}
    async getGroups(): Promise<void>{}
    async getStream(streamId: string): Promise<void> {}
}