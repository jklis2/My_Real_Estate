import { useState, useEffect } from 'react';
import DropdownMenu from 'components/Dropdown';
import { useUpdateAvatarMutation } from 'services/avatarApi';

interface AvatarProps {
  userId: string;
}

export default function UserAvatar({ userId }: AvatarProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [timestamp, setTimestamp] = useState<number>(Date.now());
  const [, { isSuccess }] = useUpdateAvatarMutation();

  useEffect(() => {
    if (isSuccess) {
      setTimestamp(Date.now());
    }
  }, [isSuccess]);

  return (
    <div className="d-flex flex-col relative">
      <div className="h-16 w-16 " onClick={() => setDropdownOpen(prevOpen => !prevOpen)}>
        <img src={`${import.meta.env.VITE_API_URL}Avatar?userId=${userId}&t=${timestamp}`} className="w-full h-full rounded-full bg-slate-300" loading="lazy" />
      </div>
      <DropdownMenu isOpen={isDropdownOpen} />
    </div>
  );
}
