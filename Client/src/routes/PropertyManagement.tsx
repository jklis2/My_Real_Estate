import H2 from "../components/H2";
import SearchForm from "../components/SearchForm";
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
