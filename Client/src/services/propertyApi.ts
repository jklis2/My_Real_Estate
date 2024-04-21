import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (properyId: string) => ({
        method: "GET",
        url: `Property?Id=${properyId}`,
      }),
    }),

    getOwnProperties: builder.query({
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
  useGetOwnPropertiesQuery,
  useLazyGetOwnPropertiesQuery,
} = propertyApi;
export default propertyApi;
