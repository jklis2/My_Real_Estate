interface SettingsProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string;
}

export default function SettingsInput({
  label,
  placeholder,
  className,
  value,
}: SettingsProps) {
  return (
    <div className={`${className || ""} flex flex-col my-2`}>
      {label && <label className="mb-3">{label}</label>}
      <input
        className="p-3 border border-slate-300 rounded-xl"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
