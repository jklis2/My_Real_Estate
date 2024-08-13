import H3 from "./shared/H3.tsx";

interface CardProps {
  name: string;
  amount?: number | string;
  action?: string | JSX.Element;
  icon?: JSX.Element;
  progress?: number;
  theme?: string;
}

export default function StatsCard({
  icon,
  theme,
  name,
  amount,
  action,
  progress,
}: CardProps) {
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-200" : ""
      } border border-neutral-300 p-10 rounded-xl flex-1 `}
    >
      {icon}
      <h4 className="text-2xl">{name}</h4>
      {amount && <H3 className="mt-2">{amount}</H3>}
      {progress && (
        <h4
          className={`text-xl mt-3 ${
            progress > 0 ? "text-green-700" : "text-red-700"
          }`}
        >
          {progress}%
        </h4>
      )}
      {action}
    </div>
  );
}
