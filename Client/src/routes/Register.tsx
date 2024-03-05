import Button from "../components/Button";
import H2 from "../components/H2";
import P from "../components/P";
import RegisterForm from "../components/RegisterForm";
import SocialButton from "../components/SocialButton";
import { FaGoogle, FaApple } from "react-icons/fa";

export default function Register() {
  return (
    <>
      <div className="text-center">
        <H2 className="mb-4">Sign Up</H2>
        <P>Please create account to continue</P>
      </div>
      <RegisterForm />
      <div className="pt-5 flex items-center">
        <input type="checkbox"></input>
        <P className="text-xs pl-3">
          I accept the regulations and privacy policy
        </P>
        <span className="text-red-600">*</span>
      </div>
      <Button className="mt-4 w-96">Register</Button>
      <div className="text-center border-t border-b border-slate-300 mt-5">
        <P className="my-5">Or sign up with:</P>
        <div className="flex gap-2 mb-5">
          <SocialButton icon={<FaGoogle />} name="Google" />
          <SocialButton icon={<FaApple />} name="Apple" />
        </div>
      </div>
      <P className="text-center text-blue-600 mt-5">Already have an account?</P>
    </>
  );
}
