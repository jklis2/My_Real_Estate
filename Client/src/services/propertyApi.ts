import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    createProperty: builder.mutation({
      query: (property) => ({
        method: "POST",
        url: `Property`,
        body: property,
      }),
    }),
    getProperties: builder.query({
      query: () => ({
        method: "GET",
        url: `Property`,
      }),
    }),
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
  useGetPropertiesQuery,
  useLazyGetPropertiesQuery,
  useCreatePropertyMutation,
} = propertyApi;
export default propertyApi;
