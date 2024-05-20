import Select, { StylesConfig } from "react-select";
import { FEATURES_LIST } from "../consts/features";
import { useFormContext, Controller } from "react-hook-form";

interface FeatureOption {
  value: string;
  label: string;
}

const selectStyles: StylesConfig<FeatureOption> = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    borderRadius: "0.75rem",
    padding: "0.5rem",
    border: "1px solid #e1d2cb",
    borderColor: state.isFocused ? "black" : "#e1d2cb",
    "&:hover": {
      borderColor: state.isFocused ? "black" : "#e1d2cb",
    },
    boxShadow: state.isFocused ? "0 0 0 1px black" : "none",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#CBD5E1" : base.backgroundColor,
    ":hover": {
      backgroundColor: "#CBD5E1",
    },
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#CBD5E1",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "black",
  }),
  multiValueRemove: (base) => ({
    ...base,
    ":hover": {
      backgroundColor: "red",
      color: "white",
    },
  }),
};

export default function MultiSelect() {
  const formContext = useFormContext();
  const control = formContext?.control;

  const options: FeatureOption[] = FEATURES_LIST.map((feature) => ({
    value: feature,
    label: feature,
  }));

  return (
    <>
      {control && (
        <Controller
          name="property.features"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              isMulti
              options={options}
              placeholder="Select features"
              styles={selectStyles}
              className="w-full"
            />
          )}
        />
      )}
      {!control && (
        <>
          <label htmlFor="Features">Features</label>
          <Select
            isMulti
            id="Features"
            options={options}
            aria-label="Features"
            placeholder="Select features which you want"
            styles={selectStyles}
            className="w-full"
          />
        </>
      )}
    </>
  );
}
