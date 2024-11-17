import Input from 'components/shared/Input.tsx';

interface FormProps {
  loginData: { email: string; password: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function LoginForm({ loginData, handleInputChange }: FormProps) {
  const { email, password } = loginData;
  return (
    <form>
      <div className="flex flex-col mb-3">
        <Input
          value={email}
          type="email"
          autoComplete="email"
          id="email"
          label="E-mail"
          name="email"
          placeholder="E-mail Address"
          className="text-lg pl-5 h-10 sm:min-w-96 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col">
        <Input
          value={password}
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          className="text-lg pl-5 h-10 sm:min-w-96 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
