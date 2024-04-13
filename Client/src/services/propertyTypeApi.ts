import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../consts/api";

const propertyTypeApi = createApi({
  reducerPath: "propertyTypeApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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
