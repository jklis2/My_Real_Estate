import H3 from "./H3";
interface CardProps {
  name: string;
  amount: number | string;
}
export default function StatsCard({ name, amount }: CardProps) {
  return (
    <div className="border border-neutral-300 p-10 rounded-xl flex-1">
      <h4 className="text-2xl">{name}</h4>
      <H3 className="mt-3">{amount}</H3>
    </div>
  );
}
