import { IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AwsApiProvider extends BaseApiProvider{

    async getGroups(): Promise<IProviderGroup[] | []> {
        console.log("awsProvider")
        const response = await fetch("http://localhost:3004/aws");
        return await response.json().then(response => {
          return response.groups;
        });
    }

    async getStream(streamId: string): Promise<void> {
    }
}
