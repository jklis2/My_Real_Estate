import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    createPhotos: builder.mutation({
      query: ({ propertyId, photos }: { propertyId: string; photos: File[] }) => {
        const formData = new FormData();
        photos.forEach((p) => formData.append("files", p));
        return {
          method: "POST",
          url: `Photo?propertyId=${propertyId}`,
          body: formData,
          headers: {
            Accept: "*/*",
          },
        };
      },
    }),
  }),
});

export const { useCreatePhotosMutation } = photoApi;
export default photoApi;
