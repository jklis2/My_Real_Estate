import Button from "../components/Button";
import H2 from "../components/H2";
import Select from "../components/Select";
import TenantsList from "../containers/TenantsList";

export default function Tenants() {
  return (
    <div className="p-6">
      <H2 className="mb-4">Filter</H2>
      <div className="flex justify-between gap-6">
        <Select placeholder="Property" options={["Property 1", "Property 2"]} />
        <Select placeholder="Order by" options={["A-Z", "Z-A"]} />
        <Button className="px-12">Filter</Button>
      </div>
      <TenantsList />
    </div>
  );
}
