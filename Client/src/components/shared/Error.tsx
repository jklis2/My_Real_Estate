import { Link } from 'react-router-dom';
import Button from 'components/shared/Button.tsx';
import errorOccurs from 'assets/icons/errorOccurs.svg';
import refresh from 'assets/icons/refresh.svg';

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={errorOccurs} alt="An error occurs!" width={300} height={300} />
      <Link to="/dashboard" className="w-full flex justify-center">
        <Button className="sm:w-1/3 w-full mt-8 flex items-center justify-center">
          <img src={refresh} alt="Refresh" className="w-5 h-5 mr-2" /> Refresh page
        </Button>
      </Link>
    </div>
  );
}
