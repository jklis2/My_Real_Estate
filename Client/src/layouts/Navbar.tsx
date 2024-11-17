import { useEffect, useState } from 'react';
import Button from 'components/shared/Button.tsx';
import NavLogo from 'assets/Logo.png';
import BurgerMenu from 'components/shared/BurgerMenu.tsx';
import { Link } from 'react-router-dom';
import MobileNavbar from 'layouts/MobileNavbar';
import { useLazyGetUserQuery } from 'services/userApi';
import UserAvatar from 'components/UserAvatar';
import Loader from 'components/shared/Loader.tsx';

interface NavbarProps {
  textColor: string;
}

export default function Navbar({ textColor }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [getUser, { data: userData, isLoading }] = useLazyGetUserQuery();

  useEffect(() => {
    getUser('');
  }, [getUser]);

  const [data] = userData?.result || [];

  const isLoadingData = isLoading && !userData && <Loader size={16} />;
  const isDataLoaded = !isLoading && userData && <UserAvatar userId={data?.id} />;
  const isDataError = !isLoading && !userData && (
    <Link to="/auth/login">
      <Button>Sign in</Button>
    </Link>
  );

  return (
    <header>
      <nav className="flex items-center justify-between py-6 lg:py-8" aria-label="Navigation menu">
        <div className="flex lg:flex-1">
          <Link to="" className={`-m-1.5 p-1.5`}>
            <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
          </Link>
        </div>
        <div className="lg:hidden">
          <BurgerMenu toggleMenu={toggleMenu} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="#" className={`text-xl uppercase leading-6 ${textColor} custom-link-class`}>
            About
          </Link>
          <Link to="properties" className={`text-xl uppercase leading-6 ${textColor} custom-link-class`}>
            Offers
          </Link>
          {userData && (
            <Link to="dashboard" className={`text-xl uppercase leading-6 ${textColor} custom-link-class`}>
              Dashboard
            </Link>
          )}
          <Link to="admin" className={`text-xl uppercase leading-6 ${textColor} custom-link-class`}>
            Admin
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoadingData}
          {isDataLoaded}
          {isDataError}
        </div>
      </nav>

      {isOpen && <MobileNavbar toggleMenu={toggleMenu} />}
    </header>
  );
}
