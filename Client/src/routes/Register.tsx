import Button from "../components/Button";
import H2 from "../components/H2";
import P from "../components/P";
import RegisterForm from "../components/RegisterForm";
import SocialButton from "../components/SocialButton";
import google from "../assets/icons/google.svg";
import apple from "../assets/icons/apple.svg";

export default function Register() {
  return (
    <>
      <div className="text-center">
        <H2 className="mb-4">Sign Up</H2>
        <P>Please create account to continue</P>
      </div>
      <RegisterForm />
      <div className="pt-5 flex items-center">
        <input id="confirmation" type="checkbox"></input>
        <label htmlFor="confirmation" className="text-md pl-3">
          I accept the regulations and privacy policy
        </label>
        <span className="text-red-600">*</span>
      </div>
      <Button className="mt-4 w-full">Register</Button>
      <div className="text-center border-t border-b border-slate-300 mt-5">
        <P className="my-5">Or sign up with:</P>
        <div className="flex gap-2 mb-5">
          <SocialButton icon={google} name="Google" />
          <SocialButton icon={apple} name="Apple" />
        </div>
      </div>
      <P className="text-center text-blue-600 mt-5">Already have an account?</P>
    </>
  );
}
