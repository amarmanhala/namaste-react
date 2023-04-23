import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //Initially it is empty
  },
  reducers: {
    addItem: (state, action) => { //Action  - @params - state = always previous state and action(payload)
       state.items.push(action.payload);
       //Note: This function doest return anything.
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload); 
      if (index !== -1) {
        array.splice(index, 1); // Remove the object from the array
      }
    },
    clearAllItems: (state) => {
      state.items = [];
    }
  }
})

// Exports actions
export const { addItem, removeItem, clearAllItems } = cartSlice.actions
//reducer not reducers
export default cartSlice.reducer