import {
  AuthTarget,
  AuthType,
  AwsState,
  AzureState,
  gCloudState,
  IAuthAction,
  IAuthState
} from "../specs/authSpecs";

export const Connect = (
  target: AuthTarget,
  stateData: AwsState | AzureState | gCloudState
): IAuthAction => {
  return {
    type: AuthType.Connect,
    target: target,
    data: stateData
  };
};
export const Logout = (target: AuthTarget, payload: IAuthState) => {
  return {
    type: AuthType.Disconnect,
    target: target,
    payload: payload
  };
};
