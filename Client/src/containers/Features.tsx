import FeatureCard from "../components/FeatureCard";
import { PiKnifeLight, PiTree } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import H2 from "../components/H2";

export default function Features() {
  return (
    <section className="my-10">
      <H2 className="mb-6">Features</H2>
      <div className="flex gap-10 justify-between">
        <FeatureCard name="Gourmet kitchen" icon={<PiKnifeLight size={20} />} />
        <FeatureCard name="Private garage" icon={<IoCarOutline size={20} />} />
        <FeatureCard name="Backyard" icon={<PiTree size={20} />} />
        <FeatureCard name="Fireplace" icon={<AiOutlineFire size={20} />} />
      </div>
    </section>
  );
}
