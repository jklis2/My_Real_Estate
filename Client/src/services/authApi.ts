import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'Auth',
        method: 'POST',
        changeOrigin: true,
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
