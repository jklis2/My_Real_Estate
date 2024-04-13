import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api";

const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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
