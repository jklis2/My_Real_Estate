import StatsCard from "../components/StatsCard";
import P from "../components/P";
import Button from "../components/Button";

export default function BillingStats() {
  const action = (
    <P className="mt-3 cursor-pointer  text-slate-500">
      Switch to yealy billing &gt;
    </P>
  );
  return (
    <section>
      <div className="flex justify-between flex-wrap w-full gap-10 pe-10">
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
