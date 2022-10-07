import { IAuthAction, IAuthState } from "../specs/authSpecs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  current: null,
  methods: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    cloudConnect: (state, action: PayloadAction<IAuthAction>) => {
      state.current = {
        id: action.payload.data.id,
        provider: action.payload.target
      };
      state.methods.push(action.payload.data);
    },
    cloudDisconnect: (state, action) => {
      // Abort if there is no current connection to disconnect
      if (state.current == null) return;

      const id = state.current.id;
      const provider = state.current.provider;
      state.methods = state.methods.filter(loginMethod => loginMethod.id !== id);

      if (state.methods.length > 0) {
        state.current = { id: state.methods[0].id, provider: provider };
      } else {
        state.current = null;
      }
    }
  }
});

export const { cloudConnect, cloudDisconnect } = authSlice.actions;
export default authSlice.reducer;
