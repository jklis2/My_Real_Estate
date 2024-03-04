import { FaMapPin } from "react-icons/fa";
import P from "./P";

interface CardProps {
  url: string;
  location: string;
  style?: object;
}
export default function OfferCard({ url, location, style }: CardProps) {
  return (
    <div
      className={`h-[35rem] bg-[${url}] bg-cover bg-center rounded-2xl w-full relative`}
      style={style}
    >
      <div className="absolute flex items-center p-3 text-gray-700">
        <FaMapPin size={25} />
        <P className="ms-2 text-xl">{location}</P>
      </div>
    </div>
  );
}


