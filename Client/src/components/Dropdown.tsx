import { MdOutlineModeNight } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

interface DropdownProps {
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownProps) {
  if (!isOpen) return null;

  const classes =
    "text-gray-700 hover:bg-gray-200 rounded-lg block px-4 py-2 text-sm flex items-center space-x-2";

  return (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
      <div
        className="py-4 px-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className={`${classes} mb-4 `}>
          <MdOutlineModeNight className="mr-2 h-6 w-6" /> Night mode: OFF
        </div>
        <div className={classes}>
          <IoLogOutOutline className="mr-2 h-6 w-6" /> Logout
        </div>
      </div>
    </div>
  );
}
