import TenantCard from "../components/TenantCard";
import H2 from "../components/H2";


export default function TenantsList() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Your Tenants:</H2>
      <div className="flex gap-10">
        <TenantCard
          name="John"
          surname="Wick"
          propertyName="The Verano - Los Angeles, CA"
          imgPath="https://picsum.photos/500/300"
        />
        <TenantCard
          name="John"
          surname="Wick"
          propertyName="The Verano - Los Angeles, CA"
          imgPath="https://picsum.photos/500/300"
        />
        <TenantCard
          name="John"
          surname="Wick"
          propertyName="The Verano - Los Angeles, CA"
          imgPath="https://picsum.photos/500/300"
        />
      </div>
    </section>
  );
}
