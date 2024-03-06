import Button from "../components/Button";
import H2 from "../components/H2";
import Select from "../components/Select";
import TenantsList from "../containers/TenantsList";

export default function Tenants() {
  return (
    <div className="p-6">
      <H2>Filter</H2>
      <div className="flex gap-10 pr-4 mb-10">
        <Select placeholder="Property" options={["Property 1", "Property 2"]} />
        <Select placeholder="Order by" options={["A-Z", "Z-A"]} />
        <Button className="w-36">Filter</Button>
      </div>
      <H2>Your Tenants:</H2>
      <TenantsList />
    </div>
  );
}
