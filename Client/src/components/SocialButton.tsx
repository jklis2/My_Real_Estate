interface SocialProps {
  icon: JSX.Element;
  name: string;
}

export default function SocialButton({ icon, name }: SocialProps) {
  return (
    <button className="border-2 border-slate-300 rounded-md flex gap-6 justify-center items-center h-10 w-full hover:bg-slate-300 hover:border-white transition duration-300">
      {icon} {name}
    </button>
  );
}
