import P from 'components/shared/P.tsx';

interface CardProps {
  name: string;
  surname: string;
  propertyName: string;
  imgPath?: string;
}

export default function TenantCard({ name, surname, propertyName, imgPath }: CardProps) {
  return (
    <div className="rounded-xl flex-1 me-10">
      <img src={imgPath} className="w-full rounded-xl" />
      <h4 className="text-2xl mt-3">
        {name} {surname}
      </h4>
      <P>{propertyName}</P>
    </div>
  );
}
