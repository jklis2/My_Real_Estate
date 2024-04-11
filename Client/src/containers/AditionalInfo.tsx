import FeatureCard from "../components/FeatureCard";
import { PiTree } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import H2 from "../components/H2";

interface AditionalInfoProps {
  propertyTypeName: string;
  size: number;
  numberOfRooms: number;
  numberOfPeople: number;
}

export default function AditionalInfo({
  propertyTypeName,
  size,
  numberOfRooms,
  numberOfPeople,
}: AditionalInfoProps) {
  return (
    <section className="my-10">
      <H2 className="mb-6">Aditional Information</H2>
      <div className="flex flex-wrap gap-8">
        <FeatureCard
          name={`Type: ${propertyTypeName}`}
          icon={<PiTree size={20} />}
        />
        <FeatureCard
          name={`Size: ${size} m2`}
          icon={<IoCarOutline size={20} />}
        />
        <FeatureCard
          name={`Rooms: ${numberOfRooms}`}
          icon={<PiTree size={20} />}
        />
        <FeatureCard
          name={`People: ${numberOfPeople}`}
          icon={<PiTree size={20} />}
        />
      </div>
    </section>
  );
}
