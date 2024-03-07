import H3 from "./H3";
interface CardProps {
  name: string;
  amount: number | string;
  action?: string | JSX.Element;
}
export default function StatsCard({ name, amount, action }: CardProps) {
  return (
    <div className="border border-neutral-300 p-10 rounded-xl flex-grow">
      <h4 className="text-2xl">{name}</h4>
      <H3 className="mt-3">{amount}</H3>
      {action}
    </div>
  );
}
