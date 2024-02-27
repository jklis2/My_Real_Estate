import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function RootLayout() {
  return (
      <div className="container font-lato m-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
  );
}
