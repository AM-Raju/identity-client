import { TOrder } from "@/types/order.types";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (order: TOrder | Record<string, any>) => {
        console.log(order);

        return {
          url: "/create-order",
          method: "POST",
          body: order,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
