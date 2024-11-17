import H3 from 'components/shared/H3.tsx';
import P from 'components/shared/P.tsx';

interface CardProps {
  img: string;
  title: string;
  description: string;
}

export default function StepCard({ img, title, description }: CardProps) {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-100 flex justify-center mb-5">
        <img alt="step" src={img} />
      </div>
      <H3 className="mb-8">{title}</H3>
      <P className="px-10">{description}</P>
    </div>
  );
}
