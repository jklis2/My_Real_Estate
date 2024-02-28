import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";

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
      } border rounded-2xl mx-8 text-left text-neutral-700`}
    >
      <div className="px-12 py-12">
        <h3 className="text-2xl font-bold">{plan}</h3>
        <p className="my-3">
          <span className="text-4xl font-bold">${price}</span> /month
        </p>
        <p className="mb-4">{description}</p>
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