import { useEffect } from 'react';
import successIcon from '../assets/icons/success.svg';
import errorIcon from '../assets/icons/error.svg';

type AlertType = 'Success' | 'Error';

interface Props {
  name: string;
  type: AlertType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Alert({ name, type, isVisible, onClose, duration = 3000 }: Props) {
  const icon = type === 'Success' ? successIcon : errorIcon;
  const alertStyles = type === 'Success' ? 'bg-green-100 text-green-800 border-l-4 border-green-500' : 'bg-red-100 text-red-800 border-l-4 border-red-500';
  const iconStyles = type === 'Success' ? 'text-green-600' : 'text-red-600';

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-x-0 bottom-0 flex justify-center mb-4 px-4 py-2 ${alertStyles} rounded-md shadow-md w-auto`}>
      <div className="flex items-center space-x-2">
        <img src={icon} alt={`${type} icon`} className={`w-6 h-6 ${iconStyles}`} />
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
}
