import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: () => ({
        method: "GET",
        url: "Address",
      }),
    }),
  }),
});

export const { useGetAddressQuery, useLazyGetAddressQuery } = addressApi;
export default addressApi;
