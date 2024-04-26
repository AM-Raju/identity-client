import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (body) => {
        return {
          url: "/api/v1/register",
          method: "POST",
          body: body,
        };
      },
    }),
    loginUser: build.mutation({
      query: (body) => {
        return {
          url: "/api/v1/login",
          method: "POST",
          body: body,
        };
      },
    }),

    getUser: build.query({
      query: (email) => {
        console.log("get user", email);

        return {
          url: `/api/v1/users/${email}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
} = authApi;
