import H2 from "../components/H2";
import Select from "../components/Select";
import SettingsInput from "../components/SettingsInput";
import P from "../components/P"

export default function SearchForm() {
  return (
    <>
      <H2 className="font-bold mt-5">Search</H2>
      <div className="flex justify-between gap-6">
        <SettingsInput
          className="w-full"
          label="Property Name"
          placeholder="Enter property name"
        />
        <SettingsInput
          className="w-full"
          label="Location"
          placeholder="Enter property location"
        />
      </div>
      <Select
        label="Type of Operation (Rent or Buy)"
        placeholder="Select"
        options={["Rent", "Buy"]}
      />
      <P>Advanced Settings</P>
    </>
  );
}
