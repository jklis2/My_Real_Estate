import Button from 'components/shared/Button.tsx';
import P from 'components/shared/P.tsx';

interface CardProps {
  logo: string;
  name: string;
  expireDate: string;
}
export default function PaymentCard({ logo, name, expireDate }: CardProps) {
  return (
    <div className="w-full bg-gray-50 flex sm:flex-row flex-col justify-between p-3">
      <div className="flex items-center">
        {/* Add card logo */}
        <div className="w-10 h-6 border rounded-md ">
          <img src={logo} className="w-full h-full" />
        </div>
        <div className="flex flex-col mx-5">
          <P>{name}</P>
          <P className="text-neutral-500">{expireDate}</P>
        </div>
      </div>
      <div className="flex my-3 sm:my-0 sm:block">
        <Button className="px-8 w-3/4 sm:w-auto">Edit</Button>
      </div>
    </div>
  );
}
