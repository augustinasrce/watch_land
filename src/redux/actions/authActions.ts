import { AuthTarget, AuthType, IAuthAction, IAuthState, IProfile } from "../specs/authSpecs";

export const Connect = (target: AuthTarget, stateData: IProfile): IAuthAction => {
  return {
    type: AuthType.Connect,
    target: target,
    data: stateData
  };
};
export const Logout = (target: AuthTarget, stateData: IProfile): IAuthAction => {
  return {
    type: AuthType.Disconnect,
    target: target,
    data: stateData
  };
};
