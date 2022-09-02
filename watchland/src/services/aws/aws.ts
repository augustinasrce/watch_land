import { BaseCloudService } from "../base";
import { IAwsLogGroups, IAwsLogs, IAwsProvider, IAwsStreams } from "./spec";

export class AwsService extends BaseCloudService implements IAwsProvider{
  async groups():Promise<IAwsLogGroups[]|[]>{
    const response = await fetch("http://localhost:3004/groups");
    return await response.json();
  } 
  async streams(groupName:string):Promise<IAwsStreams[]|[]> {
    const response = await fetch("http://localhost:3004/streams");
    return await response.json();
  }
  async  logs(grouName:string, streams:string[]):Promise<IAwsLogs[]|[]>{
    const response = await fetch("http://localhost:3004/logs");
    return await response.json();
  }
}
