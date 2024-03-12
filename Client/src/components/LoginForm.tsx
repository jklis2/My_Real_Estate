import Input from "./Input";

export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col mb-3">
        <Input
          type="email"
          id="email"
          label="E-mail"
          placeholder="E-mail Address"
          className="text-lg pl-5 h-10 sm:min-w-96 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="Password"
          className="text-lg pl-5 h-10 sm:min-w-96 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
      </div>
    </form>
  );
}
