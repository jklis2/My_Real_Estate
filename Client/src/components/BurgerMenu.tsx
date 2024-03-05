import { RxHamburgerMenu } from "react-icons/rx";

interface BurgerProps {
  toggleMenu: () => void;
}

export default function BurgerMenu({ toggleMenu }: BurgerProps) {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={toggleMenu}
      >
        <RxHamburgerMenu size={50} />
      </button>
    </div>
  );
}
