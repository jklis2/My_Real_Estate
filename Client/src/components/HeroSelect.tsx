interface SelectProps {
  name: string;
  id: string;
  text: string;
}

export default function HeroSelect({ name, id, text }: SelectProps) {
  return (
    <div className="w-full flex justify-evenly items-center border-r border-slate-400">
      <select
        className="w-full bg-transparent outline-none mx-8 py-5 text-2xl  "
        name={name}
        id={id}
      >
        <option>{text}</option>
      </select>
    </div>
  );
}
