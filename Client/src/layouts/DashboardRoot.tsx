import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <DashboardNav />
        <Outlet />
      </main>
    </div>
  );
}
