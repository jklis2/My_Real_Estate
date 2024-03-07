import Listing from "../containers/Listing";
import PropertiesSearch from "../containers/PropertiesSearch";

export default function PropertyListing() {
  return (
    <div className="mx-10">
      <PropertiesSearch />
      <Listing />
    </div>
  );
}
