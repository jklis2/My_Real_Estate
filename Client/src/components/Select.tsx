import React, { useState } from "react";

interface SelectProps {
  placeholder: string;
  options: string[];
}

export default function Select({ placeholder, options }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select
        className="border border-neutral-300 rounded-xl text-neutral-700 text-xl w-96 p-3"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map(function (option, index) {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
