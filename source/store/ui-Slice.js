import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addAmount: {
    isVisible: false,
    category: null,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAddAmount: (state, action) => {
      state.addAmount.isVisible = !state.addAmount.isVisible;
      state.addAmount.category = action.payload;
    },
  },
});

export const { toggleAddAmount } = uiSlice.actions;
export default uiSlice.reducer;
