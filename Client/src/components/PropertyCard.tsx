import P from "./P";

interface CardProps {
  name: string;
  location: string;
  imgPath?: string;
  price?: string;
  action?: JSX.Element;
  className?: string;
  area?: string;
}

export default function PropertyCard({
  name,
  location,
  imgPath,
  price,
  action,
  className,
  area,
}: CardProps) {
  return (
    <div className={`${className || ""} w-1/3 rounded-xl me-10`}>
      <img src={imgPath} className="w-full rounded-xl" />
      <h4 className="text-2xl mt-3">{name}</h4>
      <P>{location}</P>
      {price && <P>{price}</P>}
      {action}
      {area && <P>{area}</P>}
    </div>
  );
}
