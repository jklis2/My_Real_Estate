import H3 from "../components/H3";
import PropertyCard from "../components/PropertyCard";

export default function SimilarProperties() {
  return (
    <section className="my-6">
      <H3 className="mb-4">Similar Properties</H3>
      <div className="flex gap-10">
        <PropertyCard
          name="The Verano"
          location="Los Angeles, CA"
          price="1200/month"
          area="140 m2"
          imgPath="https://picsum.photos/500/300"
        />
        <PropertyCard
          name="The Verano"
          location="Los Angeles, CA"
          price="1200/month"
          area="140 m2"
          imgPath="https://picsum.photos/500/300"
        />
        <PropertyCard
          name="The Verano"
          location="Los Angeles, CA"
          price="1200/month"
          area="140 m2"
          imgPath="https://picsum.photos/500/300"
        />
      </div>
    </section>
  );
}
