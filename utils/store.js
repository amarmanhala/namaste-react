import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; //Default it will return reducer

const store = configureStore({
  reducer: {
    cart: cartSlice,
    //Add another slice here
  }
});

export default store;