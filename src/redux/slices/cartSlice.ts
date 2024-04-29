import { TCartItem } from "@/types/cart.types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

let cartItemsFromStorage;

if (typeof window !== "undefined") {
  cartItemsFromStorage = localStorage.getItem("cartItems");
}
const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

const initialState = {
  cartItems: cartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const toastId = "addToCart";

      const existingItemIndex = state.cartItems.findIndex(
        (item: TCartItem) => item._id === action.payload._id
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex] = {
          ...state.cartItems[existingItemIndex],
          qty: state.cartItems[existingItemIndex].qty + 1,
        };
        toast.info("Increased product quantity", { id: toastId });
      } else {
        let newCartItem = { ...action.payload };
        state.cartItems.push(newCartItem);
        toast.success("Product added to cart", { id: toastId });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, action) => {
      const toastId = "decreaseCart";
      const itemIndex = state.cartItems.findIndex(
        (item: TCartItem) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;

        toast.info("Decreased product quantity", { id: toastId });
      } else if (state.cartItems[itemIndex].qty === 1) {
        const nextCartItems = state.cartItems.filter(
          (item: TCartItem) => item._id !== action.payload._id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", { id: toastId });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const toastId = "removeFromCart";
      state.cartItems.map((cartItem: TCartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextCartItems = state.cartItems.filter(
            (item: TCartItem) => item._id !== cartItem._id
          );

          state.cartItems = nextCartItems;

          toast.error("Product removed from cart", { id: toastId });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },

    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (
          cartTotal: { total: number; quantity: number },
          cartItem: TCartItem
        ) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    clearCart: (state) => {
      const toastId = "clearCart";
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { id: toastId });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
