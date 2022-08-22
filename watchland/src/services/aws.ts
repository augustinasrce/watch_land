import { IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AwsApiProvider extends BaseApiProvider {
  async getGroups(): Promise<IProviderGroup[] | []> {
    console.log("awsProvider");
    const response = await fetch("http://localhost:3004/groups");
    return await response.json();
  }

  async getGroupById(id: number): Promise<IProviderGroup | undefined> {
    return (await this.getGroups()).find(group => group.id === id);
  }

  async getStream(streamId: string): Promise<void> {}
}
