import { IApiProvider, IProviderGroup } from "../utils/interfaces";
import { BaseApiProvider } from "./base";

export class GoogleApiProvider extends BaseApiProvider {
  async getGroups(): Promise<IProviderGroup[] | []> {
    console.log("Google groups");
    const response = await fetch("http://localhost:3005/groups");
    return await response.json();
  }

  async getStream(streamId: string): Promise<void> {}
}
