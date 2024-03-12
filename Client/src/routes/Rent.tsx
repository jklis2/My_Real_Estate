import React, { useState } from "react";
import H2 from "../components/H2";
import Select from "../components/Select";
import PropertiesList from "../containers/PropertiesList";

export default function Rent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-6">
      <H2 className="mb-4">Sort</H2>
      <Select
        className="border border-neutral-300 rounded-xl text-neutral-700 text-xl p-3"
        placeholder="Order by"
        options={["A-Z", "Z-A"]}
        selectedOption={selectedOption}
        onChange={handleChange}
      />
      <PropertiesList title="Your rented properties (12):" />
    </div>
  );
}
