import { useState } from "react";
import NavLink from "./SideLink";
import { LINKS_BEFORE, LINKS_AFTER, LINKS_ADMIN } from "../consts/links";
import Button from "./Button";
import NavLogo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isAdminPage = location.pathname.startsWith("/admin");

  const [activeLink, setActiveLink] = useState<string>("/dashboard");

  const handleSetActiveLink = (path: string) =>
    setActiveLink(
      isDashboardPage
        ? `/dashboard${path !== "/dashboard" ? `/${path}` : ""}`
        : path
    );

  return (
    <nav className="mx-10 fixed h-screen flex flex-col justify-between py-6">
      <div className="text-center">
        <Link
          to={`${isDashboardPage ? "/dashboard" : "/admin"}`}
          className="mb-3 flex justify-center"
        >
          <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
        </Link>

        {isAdminPage &&
          LINKS_ADMIN.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={activeLink === link.to}
              onClick={() =>
                handleSetActiveLink(link.to.replace("/dashboard/", ""))
              }
            />
          ))}

        {isDashboardPage &&
          LINKS_BEFORE.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={activeLink === link.to}
              onClick={() =>
                handleSetActiveLink(link.to.replace("/dashboard/", ""))
              }
            />
          ))}
      </div>

      <div className="text-center">
       <Button className="w-full mb-3">New property</Button>
        {isAdminPage && <Button className="w-full ">New User</Button>}
        {isDashboardPage &&
          LINKS_AFTER.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={activeLink === link.to}
              onClick={() =>
                handleSetActiveLink(link.to.replace("/dashboard/", ""))
              }
            />
          ))}
      </div>
    </nav>
  );
}
