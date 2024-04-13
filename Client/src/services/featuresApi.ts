import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api";

const featuresApi = createApi({
  reducerPath: "featuresApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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
