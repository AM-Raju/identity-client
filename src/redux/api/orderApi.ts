import { TOrder } from "@/types/order.types";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (order: TOrder | Record<string, any>) => {
        return {
          url: "/create-order",
          method: "POST",
          body: order,
        };
      },
      //   invalidatesTags: ["order"],
    }),

    getOrders: build.query({
      query: () => {
        return {
          url: "orders",
          method: "GET",
        };
      },
      //   providesTags: ["order"],
    }),

    myOrders: build.query({
      query: (email) => {
        return {
          url: `orders/${email}`,
          method: "GET",
        };
      },
      //   providesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery, useMyOrdersQuery } =
  orderApi;
