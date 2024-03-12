import H2 from "../components/H2";
import Select from "../components/Select";
import P from "../components/P";
import Input from "./Input";

export default function SearchForm() {
  return (
    <section className="my-10">
      <H2 className="font-bold mb-8">Search</H2>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col w-full">
          <Input
            type="text"
            id="propertyName"
            className="p-3 border border-slate-300 rounded-xl w-full"
            label="Property Name"
            placeholder="Enter property name"
          />
        </div>

        <div className="flex flex-col w-full">
          <Input
            type="text"
            id="locationName"
            className="p-3 border border-slate-300 rounded-xl "
            label="Location"
            placeholder="Enter property location"
          />
        </div>
      </div>
      <Select
        label="Type of Operation (Rent or Buy)"
        placeholder="Select"
        options={["Rent", "Buy"]}
      />
      <P>Advanced Settings</P>
    </section>
  );
}
