import Button from "../components/Button";
import NavLogo from "../assets/Logo.png";
import BurgerMenu from "../components/BurgerMenu";


export default function Navbar() {
  return <header >
    <nav className="flex items-center justify-between p-6 lg:p-8" aria-label="Navigation menu">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
        </a>
      </div>
      <BurgerMenu />
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">About</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Offers</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Property</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Contact</a>
      </div>
      
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       <Button>Sign in</Button>
      </div>
    </nav>
  </header>;
}