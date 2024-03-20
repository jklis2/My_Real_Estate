import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Root";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Rent from "./routes/Rent";
import Properties from "./routes/Properties";
import Tenants from "./routes/Tenants";
import Reports from "./routes/Reports";
import NotFound from "./routes/NotFound";
import Profile from "./routes/Profile";
import Billing from "./routes/Billing";
import Security from "./routes/Security";
import Notifications from "./routes/Notifications";
import SettingsLayout from "./layouts/SettingsRoot";
import AdminPanel from "./routes/AdminPanel";
import PropertyManagement from "./routes/PropertyManagement";
import UsersManagement from "./routes/UsersManagement";
import AdminSettings from "./routes/AdminSettings";
import React, { Suspense } from "react";
import Loader from "./components/Loader";
import AuthLayout from "./layouts/AuthRoot";

//Lazy
const PropertyListing = React.lazy(() => import("./routes/PropertyListing"));
const Property = React.lazy(() => import("./routes/Property"));
const DashboardLayout = React.lazy(() => import("./layouts/DashboardRoot"));
const Login = React.lazy(() => import("./routes/Login"));
const Register = React.lazy(() => import("./routes/Register"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "properties",
        element: (
          <Suspense fallback={<Loader />}>
            <PropertyListing />
          </Suspense>
        ),
      },
      {
        path: "property/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <Property />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense
        fallback={
          <main className="h-screen flex justify-center items-center">
            <Loader />
          </main>
        }
      >
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "rent",
        element: <Rent />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "tenants",
        element: <Tenants />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "billing",
            element: <Billing />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
        ],
      },
    ],
  },
  {
    path: "admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminPanel />,
      },
      {
        path: "properties",
        element: <PropertyManagement />,
      },
      {
        path: "users",
        element: <UsersManagement />,
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
