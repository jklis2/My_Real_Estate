import TenantCard from "../components/TenantCard";

export default function TenantsList() {
  return (
    <section className="my-10">
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
