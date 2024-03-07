import FeatureCard from "../components/FeatureCard";
import H3 from "../components/H3";
import { PiKnifeLight, PiTree } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

export default function Features() {
  return (
    <section className="my-6">
      <H3 className="mb-4">Features</H3>
      <div className="flex gap-10 justify-between">
        <FeatureCard name="Gourmet kitchen" icon={<PiKnifeLight size={20} />} />
        <FeatureCard name="Private garage" icon={<IoCarOutline size={20} />} />
        <FeatureCard name="Backyard" icon={<PiTree size={20} />} />
        <FeatureCard name="Fireplace" icon={<AiOutlineFire size={20} />} />
      </div>
    </section>
  );
}
