import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const avatarApi = createApi({
  reducerPath: "avatarApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: `Avatar?userId=${data.id}`,
        body: data.file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation } = avatarApi;
export default avatarApi;
