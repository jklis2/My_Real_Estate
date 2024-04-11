import { useEffect } from "react";
import FeatureCard from "../components/FeatureCard";
import { PiTree } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import H2 from "../components/H2";
import { useParams } from "react-router-dom";
import { useLazyGetPropertyTypeQuery } from "../services/propertyTypeApi";

interface AditionalInfoProps {
    size: number;
    numberOfRooms: number;
    numberOfPeople: number;
}

export default function AditionalInfo({ size, numberOfRooms, numberOfPeople}: AditionalInfoProps) {
    const { id } = useParams<{id?: string}>();
    
    const [getPropertyType, { data }] = useLazyGetPropertyTypeQuery();

    useEffect(() => {
      getPropertyType(id);
    }, [getPropertyType, id]);
    const propertyType = data?.result[0];
  console.log(propertyType)
  return (
    <section className="my-10">
      <H2 className="mb-6">Aditional Information</H2>
      <div className="flex flex-wrap gap-8">
        <FeatureCard name={`Type: ${propertyType.propertyTypeName}`} icon={<PiTree size={20} />} />
        <FeatureCard name={`Size: ${size} m2`} icon={<IoCarOutline size={20} />} />
        <FeatureCard name={`Rooms: ${numberOfRooms}`} icon={<PiTree size={20} />} />
        <FeatureCard name={`People: ${numberOfPeople}`} icon={<PiTree size={20} />} />
      </div>
    </section>
  );
}
