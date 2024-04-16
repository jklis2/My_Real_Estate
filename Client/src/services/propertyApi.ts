import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: () => ({
        method: "GET",
        url: "Property",
      }),
    }),
    getOwnProperty: builder.query({
      query: (userId) => ({
        method: "GET",
        url: `Property?userId=${userId} `,
      }),
    }),
  }),
});

export const {
  useGetPropertyQuery,
  useLazyGetPropertyQuery,
  useGetOwnPropertyQuery,
  useLazyGetOwnPropertyQuery,
} = propertyApi;
export default propertyApi;
