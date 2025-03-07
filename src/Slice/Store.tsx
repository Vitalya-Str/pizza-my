import { configureStore } from "@reduxjs/toolkit";
import pizza from "./PizzaSlice";
import filter from "./FilterSlice";
import cart from "./CartSlice";

export const store = configureStore({
  reducer: {
    pizza,
    filter,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
