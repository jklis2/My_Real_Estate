import { useState } from "react";
import DropdownMenu from "./Dropdown";

interface AvatarProps {
  userId: string;
}

export default function UserAvatar({ userId }: AvatarProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="d-flex flex-col relative">
      <div
        className="h-16 w-16 "
        onClick={() => setDropdownOpen((prevOpen) => !prevOpen)}
      >
        <img
          src={`${import.meta.env.VITE_API_URL}Avatar?userId=${userId}`}
          className="w-full h-full rounded-full bg-slate-300"
          loading="lazy"
        />
      </div>
      <DropdownMenu isOpen={isDropdownOpen} />
    </div>
  );
}
