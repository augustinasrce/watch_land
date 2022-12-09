import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDateState, IDateStartAction, IDateEndAction } from "../specs/dataSpecs";

const initialState: IDateState = {
  startDate: new Date().setFullYear(new Date().getFullYear() - 1),
  endDate: new Date().setFullYear(new Date().getFullYear())
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    updateStartDate: (state, action: PayloadAction<IDateStartAction>) => {
      state.startDate = action.payload.dateStartLimit;
    },
    updateEndDate: (state, action: PayloadAction<IDateEndAction>) => {
      state.endDate = action.payload.dateEndLimit;
    }
  }
});

export const { updateStartDate, updateEndDate } = dateSlice.actions;
export default dateSlice.reducer;
