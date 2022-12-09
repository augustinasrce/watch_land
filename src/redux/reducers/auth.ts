import {
  IAuthAction,
  IAuthActionDisconnect,
  IAuthConnectionAction,
  IAuthState,
  IProfile
} from "../specs/authSpecs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSessions } from "../../utils";

const initialState: IAuthState = {
  current: null,
  methods: AuthSessions.getMethods()
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateConnections: (state, action: PayloadAction<IAuthConnectionAction>) => {
      state.methods = action.payload.data;
    },
    cloudConnect: (state, action: PayloadAction<IAuthAction>) => {
      state.current = {
        id: action.payload.data.id,
        provider: action.payload.target
      };
      state.methods.push(action.payload.data);
    },
    cloudDisconnect: (state, action: PayloadAction<IAuthActionDisconnect>) => {
      const currentMethods = state.methods;
      const newMethods = currentMethods.filter(
        (method: IProfile) => method.id === action.payload.id
      );
      state.methods = newMethods;
    }
  }
});

export const { cloudConnect, cloudDisconnect, updateConnections } = authSlice.actions;
export default authSlice.reducer;
