import H2 from "../components/H2";
import StatsCard from "../components/StatsCard";
export default function QuickStats() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Quick stats</H2>
      <div className="flex flex-wrap w-full gap-3 ">
        <StatsCard name="Properties" amount={12} />
        <StatsCard name="Leases" amount={24} />
        <StatsCard name="Tenants" amount={32} />
      </div>
    </section>
  );
}
