import { NavLink } from "react-router-dom";

export default function SettingsNav() {
  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `w-full rounded-full p-3 ${
      isActive ? " transition-all bg-gray-100" : ""
    }`;
  };
  return (
    <header className="rounded-full bg-slate-300 py-2">
      <nav className="w-100 flex justify-between items-center text-center text-xl px-6">
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
    </header>
  );
}
