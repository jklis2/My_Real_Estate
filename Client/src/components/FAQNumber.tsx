import H3 from "../components/H3";

interface FAQProps {
  number: number;
}

export default function FAQNumber({ number }: FAQProps) {
  return (
    <div className="flex flex-shrink-0 items-center justify-center bg-slate-300 rounded-full w-12 h-12">
      <H3>{number}</H3>
    </div>
  );
}
