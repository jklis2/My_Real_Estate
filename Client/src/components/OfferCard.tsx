import P from "./shared/P.tsx";
import pin from "../assets/icons/pin.svg";

interface CardProps {
  url: string;
  location: string;
}
export default function OfferCard({ url, location }: CardProps) {
  return (
    <div
      className={`h-[35rem] ${url} bg-cover bg-center rounded-2xl w-full relative`}
    >
      <div className="absolute flex items-center p-3 text-blue-300">
        <img src={pin} alt="map icon" width={25} height={25} />

        <P className="ms-2 text-xl">{location}</P>
      </div>
    </div>
  );
}
