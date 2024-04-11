import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const featuresApi = createApi({
  reducerPath: "featuresApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7275/" }),
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: (id) => ({
        method: "GET",
        url: `Features?PropertyId=${id}`,
      }),
    }),
  }),
});

export const { useGetFeaturesQuery, useLazyGetFeaturesQuery } = featuresApi;
export default featuresApi;
