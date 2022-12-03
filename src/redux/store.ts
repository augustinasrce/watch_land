import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import logsSlice from "./reducers/logs";
import dateSlice from "./reducers/searchDate";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    logs: logsSlice,
    date: dateSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
