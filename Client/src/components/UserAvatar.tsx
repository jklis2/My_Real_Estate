import { useState } from "react";
import useAvatar from "../hooks/useAvatar";
import DropdownMenu from "./Dropdown";

interface AvatarProps {
  userId: string;
}

export default function UserAvatar({ userId }: AvatarProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const avatar = useAvatar(userId);

  return (
    <div className="d-flex flex-col relative">
      <div
        className="h-16 w-16 "
        onClick={() => setDropdownOpen((prevOpen) => !prevOpen)}
      >
        <img src={avatar} className="w-full h-full rounded-full bg-slate-300" />
      </div>
      <DropdownMenu isOpen={isDropdownOpen} />
    </div>
  );
}
