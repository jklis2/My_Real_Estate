import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const featuresApi = createApi({
  reducerPath: 'featuresApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: builder => ({
    getFeatures: builder.query({
      query: ({ id }) => ({
        method: 'GET',
        url: `Features${id && `?PropertyId=${id}`}`,
      }),
    }),
    createFeatures: builder.mutation({
      query: ({ propertyId, featuresList }) => ({
        method: 'POST',
        url: `Features?propertyId=${propertyId}`,
        body: featuresList,
      }),
    }),
  }),
});

export const { useGetFeaturesQuery, useLazyGetFeaturesQuery } = featuresApi;
export default featuresApi;
