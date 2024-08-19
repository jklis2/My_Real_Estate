import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: string;
  label: string;
  isActive: boolean;
  onClick: (path: string) => void;
}

export default function NavLink({ to, icon, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link to={to} className={`flex items-center space-x-2 w-56 p-3 my-3 rounded-lg transition duration-300 ${isActive ? 'bg-gray-200' : ''} hover:bg-gray-200`} onClick={() => onClick(to)}>
      <img src={icon} width={20} height={20} />
      <span className="text-xl text-neutral-700">{label}</span>
    </Link>
  );
}
