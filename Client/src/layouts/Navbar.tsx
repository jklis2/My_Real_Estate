import Button from "../components/Button";
import NavLogo from "../assets/Logo.png";

export default function Navbar() {
  return <header >
    <nav className="flex items-center justify-between p-6 lg:p-8" aria-label="Navigation menu">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
        </a>
      </div>

      {/* Burger */}
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Product</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Features</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Marketplace</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Company</a>
      </div>
      
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       <Button>Sign in</Button>
      </div>
    </nav>
  </header>;
}
