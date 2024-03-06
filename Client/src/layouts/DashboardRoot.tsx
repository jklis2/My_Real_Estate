import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function DashboardLayout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(window.innerWidth > 768);
  const toggleSidebar = () =>
    setIsSidebarVisible((prevOpen: boolean) => !prevOpen);

  return (
    <div className="flex max-w-screen">
      {isSidebarVisible && <Sidebar />}
      <main className="w-full relative">
        <DashboardNav toggleSidebar={toggleSidebar} />
        <Outlet />
      </main>
    </div>
  );
}
