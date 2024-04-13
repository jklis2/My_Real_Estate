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
  }),
});

export const { useGetPropertyQuery, useLazyGetPropertyQuery } = propertyApi;
export default propertyApi;
