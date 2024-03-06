interface AuthProps {
  id: string;
  label: string;
  placeholder: string;
  options?: string[];
  required?: boolean;
}

export default function AuthInput({
  id,
  label,
  placeholder,
  options,
  required,
}: AuthProps) {
  return (
    <div className=" flex flex-col space-y-1">
      <label htmlFor={id} className="mt-4 mb-1 text-base text-gray-700">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      {options ? (
        <select
          id={id}
          className="text-lg pl-5 h-10 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="text-lg pl-5 h-10 sm:min-w-96 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      )}
    </div>
  );
}
