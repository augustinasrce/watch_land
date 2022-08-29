import { ProviderTypes } from "../utils/enum";
import { IProviderGroup } from "../utils/interfaces";
import { AwsApiProvider } from "./aws";
import { AzureApiProvider } from "./azure";
import { GoogleApiProvider } from "./google";

const providers = {
  aws: AwsApiProvider,
  azure: AzureApiProvider,
  google: GoogleApiProvider
};

export const getProviderGroups = (type: ProviderTypes) => {
  const provider = new providers[type]();
  return provider.getGroups();
};

export const getGroupById = (id: number, type: ProviderTypes) => {
  const provider = new providers[type]();
  console.log(provider);
  return provider.getGroupById(id);
};


export const getStreams = (id: number, type: ProviderTypes) => {
  const provider = new providers[type]();
  console.log(provider);
  return provider.getGroupById(id);
};
