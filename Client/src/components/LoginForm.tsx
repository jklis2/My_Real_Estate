import AuthInput from "./AuthInput";

export default function LoginForm() {
  return (
    <div>
      <AuthInput
        id="Email"
        label="E-mail Address"
        placeholder="E-mail Address"
      />
      <AuthInput id="Password" label="Password" placeholder="Password" />
    </div>
  );
}
