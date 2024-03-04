import AuthInput from "./AuthInput";
import P from "../components/P";

export default function RegisterForm() {
  return (
    <div>
      <AuthInput id="FirstName" label="First Name" placeholder="First Name" />
      <AuthInput id="LastName" label="Last Name" placeholder="Last Name" />
      <AuthInput id="Email" label="First Name" placeholder="First Name" />
      <AuthInput id="PESEL" label="PESEL" placeholder="PESEL" />
      <AuthInput id="Gender" label="Gender" placeholder="Gender" />
      <AuthInput id="Password" label="Password" placeholder="Password" />
      <P className="text-xs">
        It must be a combination of minimum 8 letters, numbers, and symbols.
      </P>
      <AuthInput
        id="ConfirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
      />
    </div>
  );
}
