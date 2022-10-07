import { WLDevProfiles } from "../../services/specs";

export interface IProfile {
  id: string;
  type: WLDevProfiles;
  profile?: string;
  key?: string;
  secret?: string;
}
export interface IAuthCurrent {
  id: string;
  provider: AuthTarget;
}

export interface IAuthState {
  current: IAuthCurrent | null;
  methods: IProfile[];
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
  data: IProfile;
}
