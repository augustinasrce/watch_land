import {
  AuthTarget,
  AuthType,
  AwsState,
  AzureState,
  gCloudState,
  IAuthAction,
  IAuthState
} from "../specs/authSpecs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  aws: [],
  azure: [],
  gcloud: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    cloudConnect: (state, action: PayloadAction<IAuthAction>) => {
      if (action.payload.target == AuthTarget.AWS) state.aws.push(action.payload.data as AwsState);
    },
    cloudDisconnect: state => {}
  }
});

export const { cloudConnect, cloudDisconnect } = authSlice.actions;
export default authSlice.reducer;
