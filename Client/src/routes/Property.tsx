import AditionalInfo from "../containers/property/AditionalInfo.tsx";
import Description from "../containers/property/Description.tsx";
import Features from "../containers/property/Features.tsx";
import Gallery from "../containers/property/Gallery.tsx";
import Location from "../containers/property/Location.tsx";
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
          <Gallery photos={property.photos} propertyId={id} />
          <Description
            name={property.name}
            city={property.city}
            price={property.price}
            description={property.description}
          />
          <AditionalInfo
            propertyTypeName={property.propertyTypeName}
            size={property.size}
            numberOfRooms={property.numberOfRooms}
            numberOfPeople={property.numberOfPeople}
          />
          <Features featuresList={property.featuresList} />
          <Location />
          <SimilarProperties />
        </>
      )}
    </div>
  );
}
