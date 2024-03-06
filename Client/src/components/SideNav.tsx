import { useState } from "react";
import NavLink from "./SideLink";
import { LINKS_BEFORE, LINKS_AFTER } from "../consts/links";
import Button from "./Button";
import NavLogo from "../assets/Logo.png";

export default function SideNav() {
  const [activeLink, setActiveLink] = useState<string>("/dashboard");

  const handleSetActiveLink = (path: string) =>
    setActiveLink(`/dashboard${path !== "/dashboard" ? `/${path}` : ""}`);

  return (
    <nav className="mx-12 fixed h-screen flex flex-col justify-between py-6">
      <div className="">
        <div className="flex lg:flex-1 justify-center m-3">
          <a href="#" className="mb-3">
            <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
          </a>
        </div>
        {LINKS_BEFORE.map((link, index) => (
          <NavLink
            key={index}
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
        {LINKS_AFTER.map((link, index) => (
          <NavLink
            key={index}
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