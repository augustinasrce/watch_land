import { ProviderTypes } from "../utils/enum";
import { AwsService } from "./aws/aws";
import { AzureService } from "./azure/azure";
import { GoogleService } from "./google/google";


const providers:any = {
  aws: AwsService,
  azure: AzureService,
  google: GoogleService
};

export const getGroups = (type: ProviderTypes) => {
  const service = new providers[type]();
  return service.groups();
};

export const getStreams = (group: string, type: ProviderTypes) => {
  const service = new providers[type]();
  return service.streams(group);
};

export const getLogs = (group:string, streams:string[], type: ProviderTypes) => {
  const service = new providers[type]();
  return service.streams(group, streams);
};
