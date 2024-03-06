import { useState } from "react";

interface RadioProps {
  name: string;
  description?: string;
  onChange?: (value: boolean) => void;
}

export default function SettingsRadio({
  name,
  description,
  onChange,
}: RadioProps) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  }

  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg my-5">
      <input
        type="radio"
        id={name}
        name={name}
        checked={checked}
        onChange={handleChange}
        className="form-radio h-4 w-4 text-red-600 border-gray-300"
      />
      <div className="flex flex-col flex-grow">
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {name}
        </label>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>
    </div>
  );
}
