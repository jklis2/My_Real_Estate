import SideNav from 'components/sidebar/SideNav.tsx';
import { IoCloseOutline } from 'react-icons/io5';

interface sidebarProps {
  toggleSidebar: () => void;
}

export default function Sidebar({ toggleSidebar }: sidebarProps) {
  return (
    <aside className="h-screen fixed w-80 lg:relative md:w-96 bg-white z-50">
      <div className="fixed p-3 lg:hidden">
        <IoCloseOutline className="z-50" size={50} onClick={toggleSidebar} />
      </div>
      <SideNav />
    </aside>
  );
}
