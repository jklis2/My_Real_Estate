import H3 from "../shared/H3.tsx";

interface CardProps {
  img: string;
  title: string;
  description: string;
}

export default function StepCard({ img, title, description }: CardProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-100 flex justify-center mb-5">
      <img src={img} />
      </div>
      <H3 className="mb-8">{title}</H3>
      <p className="px-10">{description}</p>
    </div>
  );
}
