import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7275/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "Auth",
        method: "POST",
        changeOrigin: true,
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
