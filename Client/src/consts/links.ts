import adminPanel from "../assets/icons/adminPanel.svg";
import adminProperties from "../assets/icons/adminProperties.svg";
import adminUsers from "../assets/icons/adminUsers.svg";
import settings from "../assets/icons/settings.svg";

import dasboard from "../assets/icons/dashboard.svg";
import properties from "../assets/icons/properties.svg";
import key from "../assets/icons/key.svg";
import users from "../assets/icons/users.svg";
import reports from "../assets/icons/reports.svg";

export const LINKS_BEFORE = [
  { id: 0, to: "/dashboard", icon: dasboard, label: "Dashboard" },
  {
    id: 1,
    to: "/dashboard/properties",
    icon: properties,
    label: "Properties",
  },
  { id: 2, to: "/dashboard/rent", icon: key, label: "Rent" },
  { id: 3, to: "/dashboard/tenants", icon: users, label: "Tenants" },
];

export const LINKS_AFTER = [
  { id: 0, to: "/dashboard/reports", icon: reports, label: "Reports" },
  {
    id: 1,
    to: "/dashboard/settings/profile",
    icon: settings,
    label: "Settings",
  },
];

export const LINKS_ADMIN = [
  { id: 0, to: "/admin", icon: adminPanel, label: "Admin Panel" },
  {
    id: 1,
    to: "/admin/properties",
    icon: adminProperties,
    label: "Properties",
  },
  { id: 2, to: "/admin/users", icon: adminUsers, label: "Users" },
  { id: 3, to: "/admin/settings", icon: settings, label: "Settings" },
];
