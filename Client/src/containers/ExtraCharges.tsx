import Button from 'components/shared/Button.tsx';
import H2 from 'components/shared/H2.tsx';
import Input from 'components/shared/Input.tsx';

export default function ExtraCharges() {
  return (
    <section className="mt-6">
      <H2>Extra Charges</H2>
      <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Description" id="description" placeholder="Enter description of extra charge" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Amount of extra charge" id="amount" placeholder="Enter amount of extra charge" />
        </div>
      </div>
      <Button className="mt-6">Add Extra Charge</Button>
    </section>
  );
}
