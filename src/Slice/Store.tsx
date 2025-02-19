import { configureStore } from "@reduxjs/toolkit";
import pizza from "./PizzaSlice";
import filter from "./FilterSlice";

export const store = configureStore({
  reducer: {
    pizza,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
