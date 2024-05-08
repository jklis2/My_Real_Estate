import Select, { StylesConfig } from "react-select";
import { FEATURES_LIST } from "../consts/features";

interface FeatureOption {
  value: string;
  label: string;
}

const selectStyles: StylesConfig<FeatureOption> = {
  control: (base) => ({
    ...base,
    width: "100%",
    borderRadius: "0.75rem",
    padding: "0.5rem",
    border: "1px solid #CBD5E1",
  }),
//   placeholder: (base) => ({
//     ...base,
//     color: "#cbd5e1ad",
//   }),
};

export default function MultiSelect() {
  const options: FeatureOption[] = FEATURES_LIST.map((feature) => ({
    value: feature,
    label: feature,
  }));

  return (
    <Select
      options={options}
      placeholder="Select features"
      styles={selectStyles}
      className="w-full"
    />
  );
}
