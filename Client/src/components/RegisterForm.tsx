import AuthInput from "./AuthInput";
import P from "../components/P";

export default function RegisterForm() {
  return (
    <div>
      <AuthInput
        id="FirstName"
        label="First Name"
        placeholder="First Name"
        required={true}
      />
      <AuthInput
        id="LastName"
        label="Last Name"
        placeholder="Last Name"
        required={true}
      />
      <AuthInput
        id="Email"
        label="E-mail"
        placeholder="E-mail"
        required={true}
      />
      <AuthInput id="PESEL" label="PESEL" placeholder="PESEL" required={true} />
      <AuthInput
        id="Gender"
        label="Gender"
        placeholder="Select Gender"
        options={["Male", "Female", "I don't wish to answer"]}
      />
      <AuthInput
        id="Password"
        label="Password"
        placeholder="Password"
        required={true}
      />
      <P className="text-xs">
        It must be a combination of minimum 8 letters, numbers, and symbols.
      </P>
      <AuthInput
        id="ConfirmPassword"
        label="Confirm Password"
        placeholder="Confirm Password"
        required={true}
      />
    </div>
  );
}
