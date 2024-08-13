import FeatureCard from "../../components/FeatureCard.tsx";
import { PiKnifeLight } from "react-icons/pi";
import H2 from "../../components/shared/H2.tsx";

interface Feature {
  id: string;
  featureName: string;
}

interface FeaturesProps {
  featuresList: Feature[];
}

export default function Features({ featuresList }: FeaturesProps) {
  return (
    <section className="my-10">
      <H2 className="mb-6">Features</H2>
      <div className="flex flex-wrap gap-8">
        {featuresList?.map((feature: Feature) => (
          <FeatureCard
            key={feature.id}
            name={feature.featureName}
            icon={<PiKnifeLight size={20} />}
          />
        ))}
      </div>
    </section>
  );
}
