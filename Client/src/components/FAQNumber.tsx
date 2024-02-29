import H3 from "../components/H3";

interface FAQProps {
  number: number;
}

export default function FAQNumber({ number }: FAQProps) {
  return (
    <div className="flex items-center justify-center bg-slate-300 rounded-full w-12 h-12 -translate-x-11">
      <H3 className="mb-0">{number}</H3>
    </div>
  );
}
