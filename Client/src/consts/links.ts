import {
  IoHome,
  IoHomeOutline,
  IoKeyOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaRegFile } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";


export const LINKS_BEFORE = [
  { id: 0, to: "/dashboard", icon: IoHome, label: "Dashboard" },
  {
    id: 1,
    to: "/dashboard/properties",
    icon: IoHomeOutline,
    label: "Properties",
  },
  { id: 2, to: "/dashboard/rent", icon: IoKeyOutline, label: "Rent" },
  { id: 3, to: "/dashboard/tenants", icon: BsPeople, label: "Tenants" },
];

export const LINKS_AFTER = [
  { id: 0, to: "/dashboard/reports", icon: FaRegFile, label: "Reports" },
  {
    id: 1,
    to: "/dashboard/settings/profile",
    icon: IoSettingsOutline,
    label: "Settings",
  },
];

export const LINKS_ADMIN = [
  { id: 0, to: "/admin", icon: MdOutlineAdminPanelSettings, label: "Admin Panel" },
  {
    id: 1,
    to: "/admin/properties",
    icon: IoHomeOutline,
    label: "Properties",
  },
  { id: 2, to: "/admin/users", icon: LuUsers2 , label: "Users" },
  { id: 3, to: "/admin/settings", icon: IoSettingsOutline, label: "Settings" },
];
