interface InformationProps {
  icon: JSX.Element,
  text: string
}

export default function ContactInformation({ icon, text }: InformationProps) {
  return (
    <div className="flex my-8 items-center">
      {icon} <span className="ml-5 text-xl">{text}</span>
    </div>
  );
}
