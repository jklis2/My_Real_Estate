import SideNav from "../components/SideNav";
import { IoCloseOutline } from "react-icons/io5";

interface sidebarProps {
  toggleSidebar: () => void;
}

export default function Sidebar({ toggleSidebar }: sidebarProps) {
  return (
    <aside className="h-screen fixed w-80 md:relative md:w-96 bg-white z-50">
      <div className="fixed p-3 md:hidden">
        <IoCloseOutline size={50} onClick={toggleSidebar} />
      </div>
      <SideNav />
    </aside>
  );
}
