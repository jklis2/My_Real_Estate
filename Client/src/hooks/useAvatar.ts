import { useEffect, useState } from "react";
import { API_URL } from "../consts/api";

export default function useAvatar(userId: string | number) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(
          `${API_URL}/Avatar?userId=${userId}`
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
}