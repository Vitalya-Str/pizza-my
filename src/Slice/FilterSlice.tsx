import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export type FilterType = {
  categoryId: number;
  sortIndex: number;
};

const initialState: FilterType = {
  categoryId: 0,
  sortIndex: 0,
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
  },
});

export const { setCategoryIndex, setSortIndex } = filterSlice.actions;

export const filterSelector = (state: RootState) => state.filter;

export default filterSlice.reducer;
