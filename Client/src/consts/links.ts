import {
  IoHome,
  IoHomeOutline,
  IoKeyOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";

export const LINKS_BEFORE = [
  { to: "/dashboard", icon: IoHome, label: "Dashboard" },
  { to: "/dashboard/properties", icon: IoHomeOutline, label: "Properties" },
  { to: "/dashboard/rent", icon: IoKeyOutline, label: "Rent" },
  { to: "/dashboard/tenants", icon: BsPeople, label: "Tenants" },
];

export const LINKS_AFTER = [
  { to: "/dashboard/reports", icon: FaRegFile, label: "Reports" },
  { to: "/dashboard/settings", icon: IoSettingsOutline, label: "Settings" },
];
