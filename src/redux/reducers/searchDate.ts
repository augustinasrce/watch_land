import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFullYear } from "../../utils/dates";
import { IDateState, IDateStartAction, IDateEndAction } from "../specs/dataSpecs";

const initialState: IDateState = {
  startDate: getFullYear(1),
  endDate: getFullYear()
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
