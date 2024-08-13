import { Link } from "react-router-dom";
import Button from "../components/shared/Button.tsx";
import BurgerMenu from "../components/shared/BurgerMenu.tsx";
import { useEffect } from "react";
import { useLazyGetUserQuery } from "../services/userApi";
import UserAvatar from "../components/UserAvatar";

interface MNavbarProps {
  toggleMenu: () => void;
}

export default function MobileNavbar({ toggleMenu }: MNavbarProps) {
  const [getUser, { data: userData }] = useLazyGetUserQuery();

  useEffect(() => {
    getUser("");
  }, [getUser]);

  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-50"></div>
      <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-end">
          <BurgerMenu toggleMenu={toggleMenu} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6 flex flex-col gap-8">
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
            <div className="py-6 flex justify-end">
              {userData && <UserAvatar userId={userData.result[0].id} />}
              {!userData && (
                <Link to="/auth/login">
                  <Button>Sign in</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
