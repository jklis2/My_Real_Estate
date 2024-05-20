import { useState } from 'react';

const useAvatar = (initialTimestamp: number | null): [number | null, () => void] => {
  const [avatarTimestamp, setAvatarTimestamp] = useState<number | null>(initialTimestamp);

  const updateAvatarTimestamp = () => {
    setAvatarTimestamp(new Date().getTime());
  };

  return [avatarTimestamp, updateAvatarTimestamp];
};

export default useAvatar;
