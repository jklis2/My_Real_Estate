import NavLogo from "../assets/Logo.png";
import SideNav from "../components/SideNav";

export default function Sidebar() {
  return (
    <aside className="h-screen">
      <div className="flex lg:flex-1 justify-center mt-3">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="h-16 w-auto" src={NavLogo} alt="NavLogo" />
        </a>
      </div>
      <SideNav />
    </aside>
  );
}
