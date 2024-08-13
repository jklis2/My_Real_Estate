import H2 from "../components/shared/H2.tsx";
import P from "../components/shared/P.tsx";
import SearchForm from "../components/search-property/SearchForm.tsx";

export default function PropertiesSearch() {
  return (
    <section>
      <H2 className="mb-4">Properties</H2>
      <P>Manage your properties, tenants, and leases all in one place.</P>
      <SearchForm />
    </section>
  );
}
