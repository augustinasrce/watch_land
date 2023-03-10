import {
  AuthTarget,
  AuthType,
  IAuthAction,
  IAuthActionDisconnect,
  IAuthConnectionAction,
  IProfile
} from "redux/specs/authSpecs";

export const Connect = (target: AuthTarget, stateData: IProfile): IAuthAction => {
  return {
    type: AuthType.Connect,
    target: target,
    data: stateData
  };
};
export const Logout = (id: string): IAuthActionDisconnect => {
  return {
    id: id
  };
};
export const SyncAuthMethods = (methods: IProfile[]): IAuthConnectionAction => {
  return {
    data: methods
  };
};
