import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Address } from 'interfaces/Address';

const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: builder => ({
    getAddresses: builder.query({
      query: () => ({
        method: 'GET',
        url: `Address`,
      }),
    }),
    getAddress: builder.query({
      query: ({ propertyId, userId }) => ({
        method: 'GET',
        url: `Address?${propertyId ? `PropertyId=${propertyId}` : `userId=${userId}`}`,
      }),
    }),
    createAddress: builder.mutation({
      query: ({ address, state, propertyId, userId }) => ({
        url: `Address?${propertyId ? `PropertyId=${propertyId}` : `userId=${userId}`}`,
        method: 'POST',
        body: { ...address, state },
      }),
    }),
    editAddress: builder.mutation({
      query: (address: Address) => ({
        url: `Address?addressId=${address.id}`,
        method: 'PUT',
        body: address,
      }),
    }),
  }),
});

export const { useGetAddressQuery, useLazyGetAddressQuery, useGetAddressesQuery, useLazyGetAddressesQuery, useEditAddressMutation, useCreateAddressMutation } = addressApi;
export default addressApi;
