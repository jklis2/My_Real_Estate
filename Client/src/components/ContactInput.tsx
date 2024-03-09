interface InputProps {
  id: string;
  placeholder: string;
  className?: string;
  size?: "big" | "small";
  autocomplete?: string;
}
export default function ContactInput({
  size,
  placeholder,
  className,
  id,
  autocomplete,
}: InputProps) {
  return size === "big" ? (
    <textarea
      rows={5}
      className={`${className} bg-slate-200 p-3 rounded-md outline-none shadow-lg`}
      id={id}
      placeholder={placeholder}
      autoComplete={autocomplete}
    />
  ) : (
    <input
      className={`${
        className || ""
      } bg-slate-200 p-3 rounded-md shadow-lg outline-none`}
      type="text"
      id={id}
      placeholder={placeholder}
      autoComplete={autocomplete}
    />
  );
}
