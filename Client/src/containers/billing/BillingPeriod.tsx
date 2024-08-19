import H2 from 'components/shared/H2.tsx';
import Input from 'components/shared/Input.tsx';

export default function BillingPeriod() {
  return (
    <section className="mt-6">
      <H2>Billing Period</H2>
      <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input type="date" className="p-3 border border-slate-300 rounded-xl" label="Start Date" id="periodStart" placeholder="Enter start date" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input type="date" className="p-3 border border-slate-300 rounded-xl" label="End Date" id="periodEnd" placeholder="Enter end date" />
        </div>
      </div>
    </section>
  );
}
