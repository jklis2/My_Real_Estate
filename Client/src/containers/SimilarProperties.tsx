import H2 from "../components/H2";
import PropertyCard from "../components/PropertyCard";

export default function SimilarProperties() {
  return (
    <section className="my-6">
      <H2 className="mb-6">Similar Properties</H2>
      <div className="gap-10 grid lg:grid-cols-3 sm:grid-cols-2 ">
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
