import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7275/" }),
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
