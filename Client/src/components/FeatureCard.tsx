import P from "./P";

interface FeatureProps {
  name: string;
  icon: JSX.Element;
}

export default function FeatureCard({ name, icon }: FeatureProps) {
  return (
    <div className="flex px-16 py-4 border rounded-xl text-center">
      <div className="mr-3">{icon}</div>
      <P>{name}</P>
    </div>
  );
}
