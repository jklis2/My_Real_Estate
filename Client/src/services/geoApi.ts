import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const geoApi = createApi({
  reducerPath: 'geoApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_MAP_API }),
  endpoints: builder => ({
    getGeo: builder.query({
      query: city => ({
        method: 'GET',
        url: `json?key=${import.meta.env.VITE_MAP_KEY}&q=${city}`,
      }),
    }),
  }),
});

export const { useGetGeoQuery, useLazyGetGeoQuery } = geoApi;
export default geoApi;
