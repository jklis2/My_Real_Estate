import H2 from 'components/shared/H2.tsx';
import LoginForm from 'components/LoginForm';
import P from 'components/shared/P.tsx';
import Button from 'components/shared/Button.tsx';
import SocialButton from 'components/SocialButton';
import { Link } from 'react-router-dom';
import google from 'assets/icons/google.svg';
import apple from 'assets/icons/apple.svg';
import { useState } from 'react';
import { useLoginMutation } from 'services/authApi';
import { setCookie } from 'utils/setCookie';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [login, { error }] = useLoginMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await login(loginData).unwrap();
      if (response) {
        const { token } = response;
        setCookie('token', token, 24);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-center">
        <H2 className="mb-4">Welcome Back</H2>
        <P>Please sign in to continue</P>
      </div>
      7<LoginForm loginData={loginData} handleInputChange={handleInputChange} />
      <div className="flex justify-between items-center pt-1">
        <div className="pt-5 flex items-center">
          <input type="checkbox" />
          <P className="text-sm pl-3">Remember me</P>
        </div>
        <P className="text-sm text-blue-600 pt-5">Forgot Password?</P>
      </div>
      {error && <P className="text-red-500 mt-3">Incorrect e-mail or password.</P>}
      <Button className="mt-4 w-full " onClick={handleSubmit}>
        Login
      </Button>
      <div className="text-center border-t border-b border-slate-300 mt-5">
        <P className="my-5">Or sign in with:</P>
        <div className="flex gap-2 mb-5">
          <SocialButton icon={google} name="Google" />
          <SocialButton icon={apple} name="Apple" />
        </div>
      </div>
      <P className="text-center text-blue-600 mt-5">
        No account yet? <Link to="/auth/register">Sign Up</Link>
      </P>
    </>
  );
}
