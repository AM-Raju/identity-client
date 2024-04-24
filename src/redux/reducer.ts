import { baseApi } from "./api/baseApi";
import cartReducer from "./slices/cartSlice";

export const reducer = {
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
