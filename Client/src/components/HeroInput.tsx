interface InputProps {
  type: string;
  placeholder: string;
}

export default function HeroInput({ type, placeholder }: InputProps) {
  return (
    <input
      className="bg-transparent outline-none w-full px-6 text-xl "
      type={type}
      placeholder={placeholder}
    ></input>
  );
}
