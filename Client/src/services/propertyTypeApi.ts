import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const propertyTypeApi = createApi({
  reducerPath: "propertyTypeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7275/" }),
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
