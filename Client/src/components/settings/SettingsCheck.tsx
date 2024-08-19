interface CheckProps {
  name: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function SettingsCheck({ name, checked, onChange }: CheckProps) {
  return (
    <label className="inline-flex items-center space-x-2 my-2">
      <input type="checkbox" className="form-checkbox text-blue-600" checked={checked} onChange={e => onChange?.(e.target.checked)} />
      <span className="text-gray-700">{name}</span>
    </label>
  );
}
