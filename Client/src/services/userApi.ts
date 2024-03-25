import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: (id) => `user/${id}`,
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "user",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useFetchUserQuery, useCreateUserMutation } = userApi;
export default userApi;
