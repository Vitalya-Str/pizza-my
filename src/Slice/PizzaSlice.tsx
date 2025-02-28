import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export interface PizzaType {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface PizzasSlice {
  pizzas: PizzaType[];
}

const initialState: PizzasSlice = {
  pizzas: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<PizzaType[]>) => {
      state.pizzas = action.payload;
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;

export const pizzaSelector = (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
