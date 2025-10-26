import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(state);
      console.log(current(state));

      // RTK - either mutate the existing state or return a new state
      // state.items.length = 0 or return { items: [] }

      state.items.length = 0; // state = []
      // return { items: [] };
    },
  },
});

// {
//     actions: {
//         addItem
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
