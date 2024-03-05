import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Root";
import Home from "./routes/Home";
import AuthLayout from "./layouts/AuthRoot";
import Login from "./routes/Login";
import Register from "./routes/Register";
import DashboardLayout from "./layouts/DashboardRoot";
import Dashboard from "./routes/Dashboard";
import Rent from "./routes/Rent";
import Properties from "./routes/Properties";
import Tenants from "./routes/Tenants";
import Reports from "./routes/Reports";
import Settings from "./routes/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
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
        element: <Settings />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
