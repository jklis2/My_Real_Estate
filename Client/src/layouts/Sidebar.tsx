import SideNav from "../components/SideNav";

export default function Sidebar() {
  return (
    <aside className="h-screen fixed w-80 md:relative md:w-96 bg-white z-50">
      <SideNav />
    </aside>
  );
}
