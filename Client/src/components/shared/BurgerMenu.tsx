import burger from "../../assets/icons/burger.svg";

interface BurgerProps {
  toggleMenu?: () => void;
}

export default function BurgerMenu({ toggleMenu }: BurgerProps) {
  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={toggleMenu}
      >
        <img src={burger} width={50} height={50}/>
      </button>
    </>
  );
}
