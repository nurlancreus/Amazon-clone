import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const filteredItems = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.products = filteredItems;
    },

    incrementItem: (state, action) => {
      const id = action.payload;

      const itemInc = state.products.find((product) => (product.id = id));

      itemInc.quantity++;
    },
    decrementItem: (state, action) => {
      const id = action.payload;

      const itemDec = state.products.find((product) => (product.id = id));

      if (itemDec.quantity === 1) {
        state.products = state.products.filter(
          (product) => product.id !== itemDec.id
        );
      }

      itemDec.quantity--;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.productsNumber = amount;
      state.total = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementItem,
  decrementItem,
  calculateTotals,
} = cartSlice.actions;

export const getCartProducts = (state) => state.cart.products;
export const getCartProductsNumber = (state) => state.cart.productsNumber;
export const getCartTotals = (state) => state.cart.total;

export default cartSlice.reducer;
