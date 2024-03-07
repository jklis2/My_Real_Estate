import H2 from "../components/H2";
import P from "../components/P";
import SearchForm from "../components/SearchForm";

export default function PropertiesSearch() {
  return (
    <section className="mb-10">
      <H2 className="my-4 mb-0">Properties</H2>
      <P>Manage your properties, tenants, and leases all in one place.</P>
      <SearchForm />
    </section>
  );
}
