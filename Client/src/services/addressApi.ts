import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7275/" }),
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
