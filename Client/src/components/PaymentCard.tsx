import Button from "./Button";
import P from "./P";

interface CardProps {
  name: string;
  expireDate: string;
}
export default function PaymentCard({ name, expireDate }: CardProps) {
  return (
    <div className="w-full bg-gray-50 flex justify-between p-3">
      <div className="flex items-center">
        {/* Add card logo */}
        <div className="w-10 h-6 border rounded-md bg-blue-300"></div>
        <div className="flex flex-col mx-5">
          <P>{name}</P>
          <P className="text-neutral-500">{expireDate}</P>
        </div>
      </div>
      <Button className="px-8">Edit</Button>
    </div>
  );
}
