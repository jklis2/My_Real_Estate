import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const avatarApi = createApi({
  reducerPath: 'avatarApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: builder => ({
    getAvatar: builder.query({
      query: () => ({
        method: 'GET',
        url: '',
      }),
    }),
    updateAvatar: builder.mutation({
      query: ({ id, file }) => {
        const formData = new FormData();
        formData.append('formFile', file);
        return {
          method: 'PUT',
          url: `Avatar?userId=${id}`,
          body: formData,
          headers: {
            Accept: '*/*',
          },
        };
      },
    }),
  }),
});
export const { useUpdateAvatarMutation } = avatarApi;
export default avatarApi;
