import H2 from "../components/H2";
import SearchForm from "../components/SearchForm";
import Table from "../components/Table";

export default function UsersManagement() {
  return (
    <div className="mx-8">
      <H2>Users management</H2>
      <SearchForm />
      <div className="mt-6">
      <Table />
      </div>
    </div>
  );
}
