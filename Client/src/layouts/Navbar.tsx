import { useEffect, useState } from "react";
import Button from "../components/Button";
import NavLogo from "../assets/Logo.png";
import BurgerMenu from "../components/BurgerMenu";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useLazyGetUserQuery } from "../services/userApi";
import UserAvatar from "../components/UserAvatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [getUser, { data: userData }] = useLazyGetUserQuery();

  useEffect(() => {
    getUser("");
  }, [getUser]);

  return (
    <header>
      <nav
        className="flex items-center justify-between py-6 lg:py-8"
        aria-label="Navigation menu"
      >
        <div className="flex lg:flex-1">
          <Link to="" className="-m-1.5 p-1.5">
            <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
          </Link>
        </div>
        <div className="lg:hidden">
          <BurgerMenu toggleMenu={toggleMenu} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-xl uppercase leading-6 text-gray-700">
            About
          </a>
          <Link
            to="properties"
            className="text-xl uppercase leading-6 text-gray-700"
          >
            Offers
          </Link>
          {userData && (
            <Link
              to="dashboard"
              className="text-xl uppercase leading-6 text-gray-700"
            >
              Dashboard
            </Link>
          )}
          <Link
            to="admin"
            className="text-xl uppercase leading-6 text-gray-700"
          >
            Admin
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {userData && userData.result.length > 0 ? (
            <UserAvatar userId={userData.result[0]?.id} />
          ) : (
            <Link to="/auth/login">
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      </nav>

      {isOpen && <MobileNavbar toggleMenu={toggleMenu} />}
    </header>
  );
}
