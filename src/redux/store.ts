import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import logsSlice from "./reducers/logs";
import dateSlice from "./reducers/searchDate";
import loadingSlice from "./reducers/loading";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    logs: logsSlice,
    date: dateSlice,
    loading: loadingSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
