import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import logsSlice from "./reducers/logs";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    logs: logsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
