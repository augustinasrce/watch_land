import { ILogState } from "../specs/authSpecs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogLimitAction } from "../specs/logSpecs";

const initialState: ILogState = {
  limit: 15
};

export const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    updateLogLimit: (state, action: PayloadAction<ILogLimitAction>) => {
      state.limit = action.payload.logLimit;
    }
  }
});

export const { updateLogLimit } = logsSlice.actions;
export default logsSlice.reducer;
