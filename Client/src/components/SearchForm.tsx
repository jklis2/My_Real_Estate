import { useState } from "react";
import H2 from "../components/H2";
import Select from "../components/Select";
import P from "../components/P";
import Input from "./Input";
import AdvancedForm from "../containers/AdvancedForm";

export default function SearchForm() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleAdvancedSettings = () => {
    setShowAdvanced((prevState) => !prevState);
  };

  return (
    <section className="my-10">
      <H2 className="font-bold mb-4">Search</H2>
      <div className="flex justify-between gap-6 mb-6 lg:mb-0 lg:flex-row flex-col">
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
      <div className="mt-3">
        <Select
          className="border border-neutral-300 rounded-xl text-neutral-700 text-xl p-3"
          label="Type of Operation (Rent or Buy)"
          placeholder="Select"
          options={["Rent", "Buy"]}
        />
      </div>
      {showAdvanced && <AdvancedForm />}
      <P onClick={toggleAdvancedSettings} className="cursor-pointer mt-4">
        {showAdvanced ? "Hide advanced settings" : "Show advanced settings"}
      </P>
    </section>
  );
}
