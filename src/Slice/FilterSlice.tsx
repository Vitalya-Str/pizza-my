import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export type FilterType = {
  categoryId: number;
  sortIndex: number;
  sortPopup: string;
  orderType: "asc" | "desc";
};

const initialState: FilterType = {
  categoryId: 0,
  sortIndex: 0,
  sortPopup: "rating",
  orderType: "asc",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortIndex: (state, action: PayloadAction<number>) => {
      state.sortIndex = action.payload;
    },
    setOrderType: (state, action: PayloadAction<"asc" | "desc">) => {
      state.orderType = action.payload;
    },
    setSortPopup: (state, action: PayloadAction<string>) => {
      state.sortPopup = action.payload;
    },
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.categoryId = Number(action.payload.categoryId);
      state.sortPopup = action.payload.sortPopup;
      state.orderType = action.payload.orderType;
      state.sortIndex = action.payload.sortIndex;
    },
  },
});

export const { setCategoryIndex, setSortIndex, setOrderType, setSortPopup, setFilter } = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;

export default filterSlice.reducer;
