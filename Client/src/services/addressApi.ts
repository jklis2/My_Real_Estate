import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: (propertyId: string) => ({
        method: "GET",
        url: `Address?PropertyId=${propertyId}`,
      }),
    }),
  }),
});

export const { useGetAddressQuery, useLazyGetAddressQuery } = addressApi;
export default addressApi;
