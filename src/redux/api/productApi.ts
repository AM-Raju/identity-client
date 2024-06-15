import { TOrder } from "@/types/order.types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    /*     createOrder: build.mutation({
      query: (order: TOrder | Record<string, any>) => {
        return {
          url: "/create-order",
          method: "POST",
          body: order,
        };
      },
      //   invalidatesTags: ["product"],
    }), */

    getProducts: build.query({
      query: () => {
        return {
          url: "all-products",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),

    /*     myOrders: build.query({
      query: (email) => {
        return {
          url: `orders/${email}`,
          method: "GET",
        };
      },
      //   providesTags: ["product"],
    }), */
  }),
});

export const { useGetProductsQuery } = productApi;
