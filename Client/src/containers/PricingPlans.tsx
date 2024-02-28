import H2 from "../components/H2";
import P from "../components/P"
import PricingCard from "../components/PricingCard";

export default function PricingPlans() {
  const featuresList = [
    "All analytics features",
    "Basic tracking of payments and bills",
    "Management of individual properties",
    "Automatic generation of financial reports",
    "Normal support",
  ];
  return (
    <section className="my-16 text-center">
      <H2>Pricing plans</H2>
      <P className="px-16 mx-16 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        hic vero molestiae inventore ex facere expedita iste tenetur et vel,
        quia unde assumenda facilis corporis suscipit possimus tempora soluta
        voluptate.
      </P>

      <div className="flex justify-center items-center my-10">
        <PricingCard
          plan="Free"
          variant="light"
          price={0}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          featuresList={featuresList}
        />
        <PricingCard
          plan="Premium"
          variant="dark"
          price={50}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          featuresList={featuresList}
        />
        <PricingCard
          plan="Enterprise"
          variant="light"
          price={100}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          featuresList={featuresList}
        />
      </div>
    </section>
  );
}
