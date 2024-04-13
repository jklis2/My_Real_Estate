import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api";

const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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
