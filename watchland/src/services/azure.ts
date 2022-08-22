import { IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class AzureApiProvider extends BaseApiProvider {
  async getGroups(): Promise<IProviderGroup[] | []> {
    const response = await fetch("http://localhost:3006/groups");
    return await response.json();
  }

  async getStream(streamId: string): Promise<void> {}
}
