import { useState } from "react";
import NavLink from "./SideLink";
import { LINKS_BEFORE, LINKS_AFTER } from "../consts/links";
import Button from "./Button";
import NavLogo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function SideNav() {
  const [activeLink, setActiveLink] = useState<string>("/dashboard");

  const handleSetActiveLink = (path: string) =>
    setActiveLink(`/dashboard${path !== "/dashboard" ? `/${path}` : ""}`);

  return (
    <nav className="mx-10 fixed h-screen flex flex-col justify-between py-6">
      <div className="text-center">
        <Link to="/dashboard" className="mb-3 flex justify-center">
          <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
        </Link>
        {LINKS_BEFORE.map((link) => (
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
        <Button className="w-full">New property</Button>
        {LINKS_AFTER.map((link) => (
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
