interface AuthProps {
  id: string;
  label: string;
  placeholder: string;
}

export default function AuthInput({ id, label, placeholder }: AuthProps) {
  return (
    <form className="flex flex-col space-y-1">
      <label htmlFor={id} className="mt-4 text-xs text-gray-700">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className="text-sm pl-5 h-10 w-96 bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
      />
    </form>
  );
}
