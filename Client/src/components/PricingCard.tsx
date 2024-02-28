import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import P from "./P";
import H3 from "./H3";

interface CardProps {
  plan: string;
  variant: "dark" | "light";
  price: number;
  description: string;
  featuresList: Array<string>;
}

export default function PricingCard({
  plan,
  price,
  description,
  variant,
  featuresList,
}: CardProps) {
  return (
    <div
      className={`${
        variant === "dark" && "bg-slate-300"
      } border rounded-2xl text-left text-neutral-700 hover:scale-110 transition duration-300`}
    >
      <div className="px-12 py-12">
        <H3>{plan}</H3>
        <P className="my-3">
          <span className="text-4xl font-bold">${price}</span> /month
        </P>
        <P className="mb-4">{description}</P>
        <hr className="bg-neutral-700" />
        <ul className="mt-5">
          {featuresList.map((feat) => (
            <li className="flex my-5">
              <FaCheckCircle
                className={`${
                  variant === "dark" ? "text-white" : "text-slate-300"
                }`}
              />
              <span className="ms-2"> {feat}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={variant}>
          Get Started
        </Button>
      </div>
    </div>
  );
}