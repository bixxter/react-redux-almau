import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    open: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      itemInCart.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);

      itemInCart.quantity -= 1;
    },
    removeItem: (state, action) => {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCart };
    },
    openOrCloseCart: (state, action) => ({ ...state, open: action.payload }),
  },
});
export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  openOrCloseCart,
} = cartSlice.actions;
