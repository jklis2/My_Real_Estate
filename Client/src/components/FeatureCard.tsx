import P from "./shared/P.tsx";

interface FeatureProps {
  name: string | number;
  icon?: JSX.Element;
  options?: Array<string>;
  input?: string | number;
  placeholder?: string;
  showCheckbox?: boolean;
  className?: string;
}

export default function FeatureCard({
  name,
  icon,
  options,
  input,
  placeholder,
  showCheckbox,
  className = "",
}: FeatureProps) {
  return (
    <div className={`flex px-16 py-4 border rounded-xl text-center items-center ${className}`}>
      <div className="mr-3">{icon}</div>
      <P>{name}</P>
      {showCheckbox && <input type="checkbox" className="ml-2" />}
      {options && (
        <select className="ml-3 p-1 border rounded">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {input && (
        <input
          type="text"
          className="ml-3 p-1 border rounded"
          placeholder={placeholder || "Enter value"}
        />
      )}
    </div>
  );
}
