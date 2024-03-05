import H2 from "../components/H2";
import PropertyCard from "../components/PropertyCard";

export default function LatestProperties() {
  return (
    <section className="my-10">
      <H2>Your recent properties</H2>
      <div className="flex gap-10">
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
