import Button from "../components/Button";
import H2 from "../components/H2";
import P from "../components/P";
import notFoundPhoto from "../assets/NotFoundPhoto.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="h-screen m-auto flex justify-center items-center  ">
      <div className="container flex flex-col items-center text-center p-6">
        <img
          src={notFoundPhoto}
          className="w-full  sm:w-auto h-64 sm:h-96 rounded-xl"
          alt="Not found"
        />
        <H2 className="mb-0 py-6">Oops! We didn't find this page.</H2>
        <P className="mb-6">
          The page you're looking for doesn't exist. But don't worry, we've got
          plenty of other great stuff to check out.
        </P>
        <Link to="/">
          <Button className="w-full sm:w-96">Back Home</Button>
        </Link>
        <P className="py-3">Or</P>
        <Button className="w-full sm:w-96">Contact Support</Button>
      </div>
    </main>
  );
}
