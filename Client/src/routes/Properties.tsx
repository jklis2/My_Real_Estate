import React, { useEffect, useState } from "react";
import H2 from "../components/H2";
import Select from "../components/Select";
import PropertiesList from "../containers/PropertiesList";
import { useLazyGetOwnPropertyQuery } from "../services/propertyApi";
import { useGetUserQuery } from "../services/userApi";

export default function Properties() {
  const [selectedOption, setSelectedOption] = useState("");
  const { data: userData } = useGetUserQuery(null);
  const [getOwnProperty, { data }] = useLazyGetOwnPropertyQuery();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    if (userData && userData.result && userData.result.length > 0) {
      const { id } = userData.result[0];

      if (id) {
        getOwnProperty(id);
      }
    }
  }, [userData, getOwnProperty]);
  console.log(userData);

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
      <PropertiesList title="Your properties: " properties={data?.result} />
    </div>
  );
}
