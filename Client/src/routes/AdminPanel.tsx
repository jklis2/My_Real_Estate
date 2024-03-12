import AllStats from "../containers/AllStats";
import PropertyStats from "../containers/PropertyStats";

export default function AdminPanel() {
  return (
    <section className="p-6 ">
      <AllStats />
      <PropertyStats />
    </section>
  );
}
