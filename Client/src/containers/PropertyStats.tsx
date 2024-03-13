import H2 from "../components/H2";
import StatsCard from "../components/StatsCard";

export default function PropertyStats() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Property statisics</H2>
      <div className="flex gap-8 me-6 lg:flex-row flex-col">
        <StatsCard name="New properties" amount="5.920" theme="dark" progress={-15}/>
        <StatsCard name="New units" amount="12.820" theme="dark" progress={20}/>
        <StatsCard name="New tenants" amount="$1.240.000" theme="dark" progress={1}/>
      </div>
    </section>
  );
}
