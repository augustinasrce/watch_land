import { IDateState } from "../specs/authSpecs";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDateStartAction, IDateEndAction } from "../specs/dataSpecs";

const initialState: IDateState = {
  startDate: 0, //unix timestamp
  endDate: new Date() // endDate: 0,// TODAYs date
  // searchString:''
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
