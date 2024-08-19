import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const propertyTypeApi = createApi({
  reducerPath: 'propertyTypeApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: builder => ({
    createPropertyType: builder.mutation({
      query: ({ propertyType, propertyId }) => ({
        method: 'POST',
        url: `PropertyType?PropertyId=${propertyId}`,
        body: { ...propertyType },
      }),
    }),
    getPropertyTypes: builder.query({
      query: () => ({
        method: 'GET',
        url: `PropertyType`,
      }),
    }),
    getPropertyType: builder.query({
      query: id => ({
        method: 'GET',
        url: `PropertyType?PropertyId=${id}`,
      }),
    }),
  }),
});

export const { useGetPropertyTypeQuery, useLazyGetPropertyTypeQuery, useGetPropertyTypesQuery, useLazyGetPropertyTypesQuery, useCreatePropertyTypeMutation } = propertyTypeApi;

export default propertyTypeApi;
