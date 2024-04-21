import H2 from "../components/H2";
import PropertyCard from "../components/PropertyCard";
import { Address } from "../interfaces/Address";
import { Property } from "../interfaces/Property";

interface Addresses {
  [key: string]: {
    result: Address[];
  };
}

interface PropertiesProps {
  title: string;
  properties: Property[];
  addresses: Addresses;
}

export default function PropertiesList({
  title,
  properties,
  addresses,
}: PropertiesProps) {
  return (
    <section className="my-10">
      <H2 className="mb-4">
        {title} ({properties?.length?.toString()})
      </H2>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        {!properties && <p>You don't have any properties yet.</p>}
        {properties &&
          properties.length > 0 &&
          properties?.map((prop) => {
            const { city } = addresses[prop.id]?.result[0] || "";
            return (
              <PropertyCard
                name={prop.name}
                location={city}
                imgPath={`${import.meta.env.VITE_API_URL}Photo?propertyId=${
                  prop.id
                }&photoId=${prop.photos[0]}`}
              />
            );
          })}
      </div>
    </section>
  );
}
