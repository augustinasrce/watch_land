import { IApiProvider, IProviderGroup } from "../utils/interfaces";

export class BaseApiProvider implements IApiProvider {
  async apiCall(url: string): Promise<any> {}
  async getGroups(): Promise<IProviderGroup[] | []> {
    return [];
  }

  async getGroupById(id: number): Promise<IProviderGroup | undefined> {
    return undefined;
  }
  async getStream(streamId: string): Promise<void> {}
}
