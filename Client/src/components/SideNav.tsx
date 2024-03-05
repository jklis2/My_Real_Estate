import { useState } from "react";
import NavLink from "./SideLink";
import {
  IoHome,
  IoHomeOutline,
  IoKeyOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";
import Button from "./Button";

export default function SideNav() {
  const [activeLink, setActiveLink] = useState<string>("/dashboard"); // Stan inicjalny dla dashboard

  const handleSetActiveLink = (path: string) => {
    // Przyjęcie pełnej ścieżki dla kliknięcia
    setActiveLink(`/dashboard${path !== "/dashboard" ? `/${path}` : ""}`);
  };

  return (
    <div>
      <nav className="mx-12 flex flex-col justify-between">
        <div>
          <NavLink
            to="/dashboard" // Pełna ścieżka dla dashboard
            icon={IoHome}
            label="Dashboard"
            isActive={activeLink === "/dashboard"}
            onClick={() => handleSetActiveLink("/dashboard")}
          />
          <NavLink
            to="/dashboard/properties" 
            icon={IoHomeOutline}
            label="Properties"
            isActive={activeLink === "/dashboard/properties"}
            onClick={() => handleSetActiveLink("properties")}
          />
          <NavLink
            to="/dashboard/rent"
            icon={IoKeyOutline}
            label="Rent"
            isActive={activeLink === "/dashboard/rent"}
            onClick={() => handleSetActiveLink("rent")}
          />
          <NavLink
            to="/dashboard/tenants"
            icon={BsPeople}
            label="Tenants"
            isActive={activeLink === "/dashboard/tenants"}
            onClick={() => handleSetActiveLink("tenants")}
          />
        </div>
        <div className="text-center">
          <Button className="w-56">New property</Button>
          <NavLink
            to="/dashboard/reports"
            icon={FaRegFile}
            label="Reports"
            isActive={activeLink === "/dashboard/reports"}
            onClick={() => handleSetActiveLink("reports")}
          />
          <NavLink
            to="/dashboard/settings"
            icon={IoSettingsOutline}
            label="Settings"
            isActive={activeLink === "/dashboard/settings"}
            onClick={() => handleSetActiveLink("settings")}
          />
        </div>
      </nav>
    </div>
  );
}
