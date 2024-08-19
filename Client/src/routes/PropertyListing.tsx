import Listing from 'containers/Listing';
import PropertiesSearch from 'containers/PropertiesSearch';
import { useMergedProperties } from 'hooks/useMergedProperties';

export default function PropertyListing() {
  const { properties, addresses } = useMergedProperties();

  return (
    <main>
      <PropertiesSearch />
      <Listing properties={properties} addresses={addresses} />
    </main>
  );
}
