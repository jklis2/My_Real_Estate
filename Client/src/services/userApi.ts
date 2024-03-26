import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7275/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        method: "GET",
        url: "User",
      }),
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "User",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useLazyGetUserQuery } =
  userApi;
export default userApi;
