import React, { useState } from "react";
import H2 from "../components/shared/H2.tsx";
import Select from "../components/shared/Select.tsx";
import PropertiesList from "../containers/PropertiesList";
import { useOwnProperties } from "../hooks/useOwnProperties";

export default function Properties() {
  const [selectedOption, setSelectedOption] = useState("");

  const properties = useOwnProperties();
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
      <PropertiesList
        title="Your properties: "
        properties={properties?.result}
        addresses={properties?.addresses}
      />
    </div>
  );
}
