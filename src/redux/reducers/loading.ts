import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoadingState, ILoadingAction } from "../specs/loadingSpecs";

const initialState: ILoadingState = {
  loading: false
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    updateLoadingState: (state, action: PayloadAction<ILoadingAction>) => {
      state.loading = action.payload.loadingData;
    }
  }
});

export const { updateLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
