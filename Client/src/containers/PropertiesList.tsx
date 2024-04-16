import H2 from "../components/H2";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../interfaces/Property";

interface PropertiesProps {
  title: string;
  properties: Property[];
}

export default function PropertiesList({ title, properties }: PropertiesProps) {
  return (
    <section className="my-10">
      <H2 className="mb-4">
        {title} ({properties?.length.toString()})
      </H2>
      <div className="flex gap-10 lg:flex-row flex-col">
        {!properties && <p>You don't have any properties yet.</p>}
        {properties?.map((prop) => (
          <PropertyCard
            name={prop.name}
            location="Yes"
            imgPath={`${import.meta.env.VITE_API_URL}Photo?propertyId=${
              prop.id
            }&photoId=${prop.photos[1]}`}
          />
        ))}
        {properties?.map((prop) => (
          <PropertyCard
            name={prop.name}
            location="Yes"
            imgPath={`${import.meta.env.VITE_API_URL}Photo?propertyId=${
              prop.id
            }&photoId=${prop.photos[1]}`}
          />
        ))}
        {properties?.map((prop) => (
          <PropertyCard
            name={prop.name}
            location="Yes"
            imgPath={`${import.meta.env.VITE_API_URL}Photo?propertyId=${
              prop.id
            }&photoId=${prop.photos[1]}`}
          />
        ))}
      </div>
    </section>
  );
}
