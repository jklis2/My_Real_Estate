import H2 from '../../components/shared/H2.tsx';
import P from '../../components/shared/P.tsx';

interface DescriptionProps {
  name: string;
  price: number;
  city: string;
  description: string;
}

export default function Description({ name, price, city, description }: DescriptionProps) {
  return (
    <section className="my-10">
      <div className="flex justify-between">
        <H2 className="mb-6">{`${name}, ${city}`}</H2>
        <H2 className="mb-6">{`${price} $/month`}</H2>
      </div>
      <P>{description}</P>
    </section>
  );
}
