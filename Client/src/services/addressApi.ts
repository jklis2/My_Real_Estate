import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getAddresses: builder.query({
      query: () => ({
        method: "GET",
        url: `Address`,
      }),
    }),
    getAddress: builder.query({
      query: (propertyId: string) => ({
        method: "GET",
        url: `Address?PropertyId=${propertyId}`,
      }),
    }),
  }),
});

export const {
  useGetAddressQuery,
  useLazyGetAddressQuery,
  useGetAddressesQuery,
  useLazyGetAddressesQuery,
} = addressApi;
export default addressApi;
