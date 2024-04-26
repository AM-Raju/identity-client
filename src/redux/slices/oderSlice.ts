import { TOrder } from "@/types/order.types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

type TOrderState = {
  order: TOrder | Record<string, any>;
};

const initialState: TOrderState = {
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.order.address = action.payload;
    },
    addOrder: (state, action) => {
      state.order = { ...state.order, ...action.payload };
    },
  },
});

export const { setAddress, addOrder } = orderSlice.actions;

export default orderSlice.reducer;
