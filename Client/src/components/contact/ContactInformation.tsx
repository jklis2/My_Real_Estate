interface InformationProps {
  icon: JSX.Element;
  text: string;
}

export default function ContactInformation({ icon, text }: InformationProps) {
  return (
    <div className="flex flex-col justify-center sm:justify-normal sm:flex-row my-8 items-center ">
      {icon} <span className="mt-6 text-center md:mt-0 md:ml-5 text-base sm:text-xl">{text}</span>
    </div>
  );
}
