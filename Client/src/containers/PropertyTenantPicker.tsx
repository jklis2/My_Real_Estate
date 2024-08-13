import H2 from "../components/shared/H2.tsx";
import Select from "../components/shared/Select.tsx";

export default function PropertyTenantPicker() {
  return (
    <section>
      <H2>Select property and tenants for the invoice</H2>
      <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
        <div className="w-full sm:w-1/2 flex flex-col">
          <Select
            options={["Property 1", "Property 2"]}
            className="p-3 border border-slate-300 rounded-xl"
            label="Select Property"
            id="selectProperty"
            placeholder="Select property"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col">
          <Select
            options={["John Doe", "John Wick"]}
            className="p-3 border border-slate-300 rounded-xl"
            label="Select Tenants"
            id="selecttenants"
            placeholder="Select type of property"
          />
        </div>
      </div>
    </section>
  );
}
