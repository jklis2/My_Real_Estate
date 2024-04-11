import AditionalInfo from "../containers/AditionalInfo";
import Description from "../containers/Description";
import Features from "../containers/Features";
import Gallery from "../containers/Gallery";
import Location from "../containers/Location";
import SimilarProperties from "../containers/SimilarProperties";
import { useMergedProperty } from "../hooks/useMergedProperty";
import { useParams } from "react-router-dom";

export default function Property() {
  const { id } = useParams<{ id?: string }>();

  const property = useMergedProperty(id || "65f82029010a574fe727cbc4");
  return (
    <div className="sm:p-0 p-6">
      {property && (
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
    </div>
  );
}
