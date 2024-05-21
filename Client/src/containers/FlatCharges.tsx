import Button from "../components/Button";
import H2 from "../components/H2";
import Input from "../components/Input";

export default function FlatCharges() {
  return (
    <section className="mt-6">
      <H2>Flat Charges</H2>
      <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input
            type="text"
            className="p-3 border border-slate-300 rounded-xl"
            label="Water"
            id="water"
            placeholder="Enter the amount for water"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input
            type="text"
            className="p-3 border border-slate-300 rounded-xl"
            label="Electricity"
            id="electricity"
            placeholder="Enter the amount for electricity"
          />
        </div>
      </div>
      <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input
            type="text"
            className="p-3 border border-slate-300 rounded-xl"
            label="Gas"
            id="gas"
            placeholder="Enter the amount for gas"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input
            type="text"
            className="p-3 border border-slate-300 rounded-xl"
            label="Administrative Rent"
            id="administrativeRent"
            placeholder="Enter the amount for administrative rent"
          />
        </div>
      </div>
      <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
        <div className="w-full sm:w-1/2 flex flex-col">
          <Input
            type="text"
            className="p-3 border border-slate-300 rounded-xl"
            label="Internet"
            id="internet"
            placeholder="Enter the amount for internet"
          />
        </div>
      </div>
      <Button className="mt-6">Add Flat Charges</Button>
    </section>
  );
}
