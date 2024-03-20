import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
import DropdownMenu from "../components/Dropdown";

interface NavProps {
  toggleSidebar: () => void;
}

export default function DashboardNav({ toggleSidebar }: NavProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className="w-full flex items-center justify-between p-6"
      aria-label="Navigation menu"
    >
      <BurgerMenu toggleMenu={toggleSidebar} />
      <div className="relative">
        <div
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="w-14 h-14 rounded-full bg-red-900 flex items-center justify-center cursor-pointer"
        ></div>
        <DropdownMenu isOpen={isDropdownOpen} />
      </div>
    </header>
  );
}
