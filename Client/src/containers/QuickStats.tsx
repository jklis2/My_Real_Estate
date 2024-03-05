import H2 from "../components/H2";
import StatsCard from "../components/StatsCard";
export default function QuickStats() {
  return (
    <section className="my-10">
      <H2>Quick stats</H2>
      <div className="flex justify-between flex-wrap w-full gap-10 pe-10">
        <StatsCard name="Properties" amount={12} />
        <StatsCard name="Leases" amount={24} />
        <StatsCard name="Tenants" amount={32} />
        <StatsCard name="Vendors" amount={14} />
      </div>

    
    </section>
  );
}
