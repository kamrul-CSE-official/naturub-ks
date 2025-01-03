import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurs/counter/counterSlice";
import languageReducer from "./featurs/languages/languageSlice";
import api from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    language: languageReducer,

    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
