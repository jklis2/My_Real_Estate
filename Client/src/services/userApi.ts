import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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
    editUser: builder.mutation({
      query: (user) => ({
        url: "User",
        method: "PUT",
        body: user,
      }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation, useLazyGetUserQuery } =
  userApi;
export default userApi;
