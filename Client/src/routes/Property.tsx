import { useEffect } from "react";
import { useLazyGetPropertyQuery } from "../services/propertyApi";
import AditionalInfo from "../containers/AditionalInfo";
import Description from "../containers/Description";
import Features from "../containers/Features";
import Gallery from "../containers/Gallery";
import Location from "../containers/Location";
import SimilarProperties from "../containers/SimilarProperties";
import Loader from "../components/Loader";

export default function Property() {
  const [getProperty, { data, isLoading }] = useLazyGetPropertyQuery();

  useEffect(() => {
    getProperty("");
  }, [getProperty]);
  const property = data?.result[0];

  return (
    <div className="sm:p-0 p-6">
      {data && (
        <>
          <Gallery />
          <Description />
          <AditionalInfo
            size={property.size}
            numberOfRooms={property.numberOfRooms}
            numberOfPeople={property.numberOfPeople}
          />
          <Features />
          <Location />
          <SimilarProperties />
        </>
      )}
      {isLoading && <Loader />}
    </div>
  );
}
