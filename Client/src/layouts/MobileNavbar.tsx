import { Link } from "react-router-dom";
import Button from "../components/Button";
import BurgerMenu from "../components/BurgerMenu";

interface MNavbarProps {
  toggleMenu: () => void;
}

export default function MobileNavbar({ toggleMenu }: MNavbarProps) {
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
              <a href="#" className="text-xl uppercase leading-6 text-gray-700">
                Offers
              </a>
              <a href="#" className="text-xl uppercase leading-6 text-gray-700">
                Property
              </a>
              <a href="#" className="text-xl uppercase leading-6 text-gray-700">
                Contact
              </a>
            </div>
            <div className="py-6 ">
              <Link to="/auth/login">
                <Button className="w-full">Sign in</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
