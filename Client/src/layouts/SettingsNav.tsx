import { NavLink } from 'react-router-dom';

export default function SettingsNav() {
  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `w-full rounded-full p-3 ${isActive ? ' transition-all bg-gray-100' : ''}`;
  };
  return (
    <nav className="rounded-3xl md:rounded-full bg-slate-300 py-2 w-100 flex flex-col md:flex-row justify-between items-center text-center text-xl px-3">
      <NavLink className={navLinkCssClasses} to="profile">
        Profile
      </NavLink>
      <NavLink className={navLinkCssClasses} to="billing">
        Billing
      </NavLink>
      <NavLink className={navLinkCssClasses} to="security">
        Security
      </NavLink>
      <NavLink className={navLinkCssClasses} to="notifications">
        Notifications
      </NavLink>
    </nav>
  );
}
