import { useState, useEffect } from "react";
import NavLink from "./SideLink";
import { LINKS_BEFORE, LINKS_AFTER, LINKS_ADMIN } from "../consts/links";
import Button from "./Button";
import NavLogo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function SideNav() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isAdminPage = location.pathname.startsWith("/admin");

  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleSetActiveLink = (path: string) => {
    setActiveLink(
      isDashboardPage
        ? `/dashboard${path !== "/dashboard" ? `/${path}` : ""}`
        : path
    );
  };

  const isLinkActive = (linkPath: string) => {
    if (linkPath.includes("/settings")) {
      return (
        activeLink.startsWith("/dashboard/settings") ||
        activeLink.startsWith("/admin/settings")
      );
    }
    return activeLink === linkPath;
  };

  return (
    <nav className="mx-10 fixed h-screen flex flex-col justify-between py-6">
      <div className="text-center">
        <Link
          to={`${isDashboardPage ? "/dashboard" : "/admin"}`}
          className="mb-3 flex justify-center z-10"
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
              isActive={isLinkActive(link.to)}
              onClick={() =>
                handleSetActiveLink(link.to.replace("/admin/", ""))
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
              isActive={isLinkActive(link.to)}
              onClick={() =>
                handleSetActiveLink(link.to.replace("/dashboard/", ""))
              }
            />
          ))}
      </div>

      <div className="text-center">
        <div className="flex flex-col gap-3">
          <Link to="create">
            <Button className="w-full">New Property</Button>
          </Link>
          {isAdminPage && <Button className="w-full">New User</Button>}
        </div>

        {isDashboardPage &&
          LINKS_AFTER.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={isLinkActive(link.to)}
              onClick={() =>
                handleSetActiveLink(link.to.replace("/dashboard/", ""))
              }
            />
          ))}
      </div>
    </nav>
  );
}
