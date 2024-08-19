import checkLight from 'assets/icons/checkLight.svg';
import checkDark from 'assets/icons/checkDark.svg';
import Button from 'components/shared/Button.tsx';
import P from 'components/shared/P.tsx';
import H3 from 'components/shared/H3.tsx';

interface Feature {
  id: number;
  name: string;
}

interface CardProps {
  plan: string;
  variant: 'dark' | 'light';
  price: number;
  description: string;
  featuresList?: Array<Feature>;
}

export default function PricingCard({ plan, price, description, variant, featuresList }: CardProps) {
  return (
    <div className={`${variant === 'dark' && 'bg-slate-300'} border rounded-2xl text-left text-neutral-700 hover:scale-110 transition duration-300`}>
      <div className="p-8 sm:p-12">
        <H3 className="mb-6">{plan}</H3>
        <P className="my-3">
          <span className="text-4xl font-bold">${price}</span> /month
        </P>
        <P className="mb-4">{description}</P>
        <hr className="bg-neutral-700" />
        <ul className="mt-5">
          {featuresList?.map(feat => (
            <li className="flex my-5" key={feat.id}>
              <img src={variant === 'dark' ? checkLight : checkDark} alt="check icon" width={16} height={16} />

              <span className="ms-2"> {feat.name}</span>
            </li>
          ))}
        </ul>
        <Button variant={variant === 'dark' ? 'dark' : 'light'} className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
}
