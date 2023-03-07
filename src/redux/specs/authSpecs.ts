import { WLDevProfiles } from "../../components/Auth/Login";

export interface IProfile {
  id: string;
  type: WLDevProfiles;
  profile?: string;
  key?: string;
  secret?: string;
  provider: AuthTarget;
  region: AuthRegion;
  tag?: string;
}
export interface IAuthCurrent {
  id: string;
  provider: AuthTarget;
}

export interface IAuthState {
  current: IAuthCurrent | null;
  methods: IProfile[];
}

export interface ILogState {
  limit: number;
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

export enum AuthRegion {
  US_East_1 = "us-east-1",
  US_East_2 = "us-east-2",
  US_West_1 = "us-west-1",
  US_West_2 = "us-west-2",
  US_Gov_East = "us-gov-east-1",
  US_Gov_West = "us-gov-west-1",
  Canada = "ca-central-1",
  Africa = "af-south-1",
  AP_Pacific_East_1 = "ap-east-1",
  AP_Pacific_SouthEast_1 = "ap-southeast-1",
  AP_Pacific_SouthEast_2 = "ap-southeast-2",
  AP_Pacific_SouthEast_3 = "ap-southeast-3",
  AP_Pacific_South_1 = "ap-south-1",
  AP_Pacific_NorthEast_1 = "ap-northeast-1",
  AP_Pacific_NorthEast_2 = "ap-northeast-2",
  AP_Pacific_Northeast_3 = "ap-northeast-3",
  EU_Central_1 = "eu-central-1",
  EU_West_1 = "eu-west-1",
  EU_West_2 = "eu-west-2",
  EU_West_3 = "eu-west-3",
  EU_South_1 = "eu-south-1",
  EU_North_1 = "eu-north-1",
  ME_South_1 = "me-south-1",
  ME_Central_1 = "me-central-1",
  SA_East_1 = "sa-east-1"
}

export interface IAuthConnectData {
  payload: any;
}
export interface IAuthAction {
  type: AuthType;
  target: AuthTarget;
  data: IProfile;
}
export interface IAuthActionDisconnect {
  id: string;
}

export interface IAuthConnectionAction {
  data: IProfile[];
}
