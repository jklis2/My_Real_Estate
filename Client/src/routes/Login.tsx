import H2 from "../components/H2";
import LoginForm from "../components/LoginForm";
import P from "../components/P";
import Button from "../components/Button";
import SocialButton from "../components/SocialButton";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="text-center">
        <H2 className="mb-4">Welcome Back</H2>
        <P>Please sign in to continue</P>
      </div>
      <LoginForm />
      <div className="flex justify-between items-center pt-1">
        <div className="pt-5 flex items-center">
          <input type="checkbox" />
          <P className="text-sm pl-3">Remember me</P>
        </div>
        <P className="text-sm text-blue-600 pt-5">Forgot Password?</P>
      </div>
      <Button className="mt-4 w-full ">Login</Button>
      <div className="text-center border-t border-b border-slate-300 mt-5">
        <P className="my-5">Or sign in with:</P>
        <div className="flex gap-2 mb-5">
          <SocialButton icon={<FaGoogle />} name="Google" />
          <SocialButton icon={<FaApple />} name="Apple" />
        </div>
      </div>
      <P className="text-center text-blue-600 mt-5">
        No account yet? <Link to="/auth/register">Sign Up</Link>
      </P>
    </>
  );
}
