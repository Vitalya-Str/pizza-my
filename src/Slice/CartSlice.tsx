import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

type CartType = {
  items: CartItemType[];
  totalPrice: number;
};

export type CartItemType = {
  id: string;
  imageUrl: string;
  title: string;
  types: string;
  sizes: number;
  price: number;
  category: number;
  rating: number;
  count: number;
};

const initialState: CartType = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<CartItemType>) => {
      const newItems = state.items.find((obj) => obj.id === action.payload.id);
      if (newItems) {
        newItems.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
    },
    itemMinus: (state, action: PayloadAction<string>) => {
      const newItems = state.items.find((obj) => obj.id === action.payload);
      if (newItems) {
        newItems.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => obj.count * obj.price + sum, 0);
    },
    deleteItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { deleteItems, setItems, itemMinus, removeItem } = cartSlice.actions;

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id);

export default cartSlice.reducer;
