import H2 from "../components/H2";
import PropertyCard from "../components/PropertyCard";

interface PropertiesProps {
  title: string;
}

export default function PropertiesList({ title }: PropertiesProps) {
  return (
    <section className="my-10">
      <H2 className="mb-4">{title}</H2>
      <div className="flex gap-10 lg:flex-row flex-col">
        <PropertyCard
          name="The Verano"
          location="Los Angeles, CA"
          imgPath="https://picsum.photos/500/300"
        />
        <PropertyCard
          name="The Verano"
          location="Los Angeles, CA"
          imgPath="https://picsum.photos/500/300"
        />
        <PropertyCard
          name="The Verano"
          location="Los Angeles, CA"
          imgPath="https://picsum.photos/500/300"
        />
      </div>
    </section>
  );
}
