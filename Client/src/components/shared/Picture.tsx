import { useEffect, useState } from 'react';

interface PictureProps {
  size?: string;
  isSuccess: boolean;
  id: string;
}

export default function Picture({ isSuccess, size, id }: PictureProps) {
  const [timestamp, setTimestamp] = useState<number>(Date.now());

  useEffect(() => {
    if (isSuccess) {
      setTimestamp(Date.now());
    }
  }, [isSuccess]);

  return (
    <figure>
      {size}
      <img src={`${import.meta.env.VITE_API_URL}Avatar?userId=${id}&t=${timestamp}`} className="w-32 h-32 rounded-full" alt="avatar"></img>
    </figure>
  );
}
