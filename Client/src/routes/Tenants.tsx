import React, { useState } from "react";
import Button from "../components/Button";
import H2 from "../components/H2";
import Select from "../components/Select";
import TenantsList from "../containers/TenantsList";

export default function Tenants() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-6">
      <H2 className="mb-4">Filter</H2>
      <div className="flex justify-between gap-6">
        <Select
          className="border border-neutral-300 rounded-xl text-neutral-700 text-xl p-3"
          placeholder="Property"
          options={["A-Z", "Z-A"]}
          selectedOption={selectedOption}
          onChange={handleChange}
        />
        <Select
          className="border border-neutral-300 rounded-xl text-neutral-700 text-xl p-3"
          placeholder="Order by"
          options={["A-Z", "Z-A"]}
          selectedOption={selectedOption}
          onChange={handleChange}
        />
        <Button className="px-12">Filter</Button>
      </div>
      <TenantsList />
    </div>
  );
}
