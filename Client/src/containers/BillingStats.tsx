import StatsCard from "../components/StatsCard";
import P from "../components/P";
import Button from "../components/Button";
import H2 from "../components/H2";

export default function BillingStats() {
  const action = (
    <P className="mt-3 cursor-pointer  text-slate-500">
      Switch to yealy billing &gt;
    </P>
  );
  return (
    <section className="my-10">
      <H2 className="my-4 mb-4">Billing stats</H2>
      <div className="flex justify-between lg:flex-row flex-col w-full gap-10">
        <StatsCard
          name="Current monthly bill"
          amount="$20.000"
          action={action}
        />
        <StatsCard name="Next payment due" amount="May 23" action={action} />
        <StatsCard name="Current plan" amount="Premium" action={action} />
      </div>
      <Button className="px-10 mt-6">Add Payment Method</Button>
    </section>
  );
}
