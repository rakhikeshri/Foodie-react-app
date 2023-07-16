import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartItemsCount: 8,
  totalAmount: 0,
  restaurantInfo: localStorage.getItem("restaurantInfo")
  ? JSON.parse(localStorage.getItem("restaurantInfo"))
  : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cartItem_itemIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItem_itemIdx != -1) {
        state.cartItems[cartItem_itemIdx].itemCount += 1;
      } else {
        const newItem = { ...action.payload, itemCount: 1 };
        state.cartItems.push(newItem);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    addRestaurantInfo(state, action){
      state.restaurantInfo = action.payload
      localStorage.setItem("restaurantInfo", JSON.stringify(state.restaurantInfo))
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.cartItemsCount = 0;
      state.restaurantInfo = []
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state, action) {
      let { quantity, total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, itemCount } = cartItem;
          const itemTotal = (price / 100) * itemCount;

          cartTotal.total += itemTotal;
          cartTotal.quantity += itemCount;

          return cartTotal;
        },
        {
          quantity: 0,
          total: 0,
        }
      );

      state.cartItemsCount = quantity;
      state.totalAmount = total;
    },

    removeCartItem(state, action) {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItems;

      if(state.cartItems.length == 0) state.restaurantInfo = []

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    descreaseCartItem(state, action) {
      const cartItem_itemIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[cartItem_itemIdx].itemCount > 1) {
        state.cartItems[cartItem_itemIdx].itemCount -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = newCartItems;

        if(state.cartItems.length == 0) state.restaurantInfo = []

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, clearCart, getTotals, descreaseCartItem, removeCartItem, addRestaurantInfo } =
  cartSlice.actions;
export default cartSlice.reducer;
