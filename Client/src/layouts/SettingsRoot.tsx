import { Outlet } from "react-router-dom";
import SettingsNav from "./SettingsNav";

export default function SettingsLayout() {
  return (
    <section className="p-6">
      <SettingsNav />
      <Outlet />
    </section>
  );
}
