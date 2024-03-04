interface SelectProps {
  name: string;
  id: string;
  text: string;
}

export default function HeroSelect({ name, id, text }: SelectProps) {
  return (
    <div className="w-full flex justify-evenly items-center border-r border-slate-400 bg-slate-50 lg:bg-transparent rounded-full lg:rounded-none">
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
