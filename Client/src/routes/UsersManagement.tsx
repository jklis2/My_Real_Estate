import H2 from 'components/shared/H2.tsx';
import SearchForm from 'components/search-property/SearchForm.tsx';
import Table from 'components/Table';

export default function UsersManagement() {
  return (
    <div className="p-6">
      <H2>Users management</H2>
      <SearchForm />
      <div className="mt-6">
        <Table />
      </div>
    </div>
  );
}
