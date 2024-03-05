import BurgerMenu from "../components/BurgerMenu";

export default function DashboardNav() {
  return (
    <header>
      <nav
        className="w-full flex items-center justify-between p-6 lg:p-8 "
        aria-label="Navigation menu"
      >
        <BurgerMenu />

        <div className="w-14 h-14 rounded-full bg-red-900"></div>
      </nav>
    </header>
  );
}
