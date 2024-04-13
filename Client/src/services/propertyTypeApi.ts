import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertyTypeApi = createApi({
  reducerPath: "propertyTypeApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPropertyType: builder.query({
      query: (id) => ({
        method: "GET",
        url: `PropertyType?PropertyId=${id}`,
      }),
    }),
  }),
});

export const { useGetPropertyTypeQuery, useLazyGetPropertyTypeQuery } =
  propertyTypeApi;
export default propertyTypeApi;
