import { IAction } from "./index";

export interface IDevTest {
  dev: boolean;
}
export interface IAwsProgrammatic {
  key: string;
  secret: string;
}
export interface IAwsProfile {
  profile: string;
}
export interface IAzureAuthState {} // TODO
export interface IgCloudAuthState {} // TODO

export type AwsState = IDevTest | IAwsProgrammatic | IAwsProfile;
export type AzureState = IDevTest | IAzureAuthState;
export type gCloudState = IDevTest | IgCloudAuthState;

export interface IAuthState {
  aws: AwsState[];
  azure: AzureState[];
  gcloud: gCloudState[];
}

export enum AuthType {
  Connect = "connect",
  Disconnect = "disconnect"
}
export enum AuthTarget {
  AWS = "aws",
  Azure = "azure",
  gCloud = "gcloud"
}
export interface IAuthConnectData {
  payload: any;
}
export interface IAuthAction {
  type: AuthType;
  target: AuthTarget;
  data: AwsState | AzureState | gCloudState;
}
