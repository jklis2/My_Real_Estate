import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex max-w-screen">
      <Sidebar />
      <main className="w-full">
        <DashboardNav />
        <Outlet />
      </main>
    </div>
  );
}
