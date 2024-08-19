import { Outlet } from 'react-router-dom';
import SettingsNav from 'layouts/SettingsNav';

export default function SettingsLayout() {
  return (
    <section className="p-6">
      <SettingsNav />
      <Outlet />
    </section>
  );
}
