import { RxHamburgerMenu } from "react-icons/rx";

export default function BurgerMenu() {
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <RxHamburgerMenu size={50} />
      </button>
    </div>
  );
}
