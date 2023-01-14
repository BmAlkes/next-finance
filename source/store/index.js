import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-Slice";
import appSlice from "./app-Slice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    app: appSlice,
  },
});

export default store;
