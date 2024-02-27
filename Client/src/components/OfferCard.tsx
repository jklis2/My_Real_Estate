import { FaMapPin } from "react-icons/fa";

interface CardProps {
  url: string;
  location: string;
}
export default function OfferCard({ url, location }: CardProps) {
  return (
    <div
      className={`h-[35rem] bg-[${url}] bg-cover bg-center rounded-2xl w-full mx-8 relative`}
    >
      <div className="absolute flex items-center p-3 text-gray-700">
        <FaMapPin size={25} />
        <p className="ms-2 text-xl">{location}</p>
      </div>
    </div>
  );
}
