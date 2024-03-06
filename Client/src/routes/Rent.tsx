import H2 from "../components/H2";
import Select from "../components/Select";
import PropertiesList from "../containers/PropertiesList";

export default function Rent() {
  return (
    <div className="p-6">
      <H2>Sort</H2>
      <Select placeholder="Order by" options={["A-Z", "Z-A"]} />
      <PropertiesList title="Your rented properties (12):" />
    </div>
  );
}
