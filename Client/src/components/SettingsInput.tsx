interface SettingsProps {
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function SettingsInput({
  label,
  placeholder,
  className,
}: SettingsProps) {
  return (
    <div className={`${className || ""} w-96 flex flex-col`}>
      {label && <label style={{ marginBottom: "8px" }}>{label}</label>}
      <input
        className="p-3 border border-slate-300 rounded-xl"
        placeholder={placeholder}
      />
    </div>
  );
}
