interface InputProps {
  type: "text" | "number" | "email" | "password";
  id: string;
  placeholder: string;
  autocomplete?: string;
}

export default function HeroInput({
  type,
  placeholder,
  id,
  autocomplete,
}: InputProps) {
  return (
    <input
      className="outline-none w-full px-6 sm:text-2xl bg-slate-50 lg:bg-transparent py-5 rounded-full lg:rounded-none"
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete={autocomplete ? autocomplete : "off"}
    ></input>
  );
}
