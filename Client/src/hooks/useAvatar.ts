import { useEffect, useState } from "react";

const useAvatar = (userId: string | number) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(
          `https://localhost:7275/Avatar?userId=${userId}`
        );
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setAvatarUrl(imageUrl);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    fetchAvatar();

    return () => {
      if (avatarUrl) {
        URL.revokeObjectURL(avatarUrl);
      }
    };

    // eslint-disable-next-line
  }, []);

  return avatarUrl as string;
};

export default useAvatar;
