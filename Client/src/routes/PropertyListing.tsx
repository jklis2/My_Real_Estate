import Listing from "../containers/Listing";
import PropertiesSearch from "../containers/PropertiesSearch";

export default function PropertyListing() {
  return (
    <main >
      <PropertiesSearch />
      <Listing />
    </main>
  );
}
