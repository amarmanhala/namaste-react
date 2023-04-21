import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] //Initially it is empty
  },
  reducers: {
    addItem: (state, action) => { //Action  - @params - state = always previous state and action(payload)
       state.items.push(action.payload);
       //Note: This function doest return anything.
    },
    clearItems: (state) => {
      state.items = [];
    }
  }
})

export default cartSlice;