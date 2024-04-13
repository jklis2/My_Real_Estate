import { useEffect, useState } from "react";

export default function usePhoto(propertyId: string | undefined, photos: string[]) {
  const [propertyPhotos, setPropertyPhotos] = useState<string[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        if (!propertyId) return;

        const fetchedPhotos: string[] = [];
        for (const photoId of photos) {
          console.log(propertyId, photoId)
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}Photo?propertyId=${propertyId}&photoId=${photoId}`
          );
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          fetchedPhotos.push(imageUrl);
        }
        setPropertyPhotos(fetchedPhotos);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPhotos();

  }, [propertyId, photos]); 

  return propertyPhotos;
}
