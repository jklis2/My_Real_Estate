import H2 from "../components/shared/H2.tsx";
import SearchForm from "../components/search-property/SearchForm.tsx";
import Table from "../components/Table";

export default function PropertyManagement() {
  return (
    <div className="p-6">
      <H2>Properties management</H2>
      <SearchForm />
      <div className="my-10">
        <Table />
      </div>
    </div>
  );
}
