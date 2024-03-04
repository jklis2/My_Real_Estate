interface InputProps {
  type: string;
  placeholder: string;
}

export default function HeroInput({ type, placeholder }: InputProps) {
  return (
    <input
      className="outline-none w-full px-6 text-xl bg-slate-50 lg:bg-transparent py-5 rounded-full lg:rounded-none"
      type={type}
      placeholder={placeholder}
    ></input>
  );
}
