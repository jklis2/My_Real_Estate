import Button from "../components/Button";
import ChangePassword from "../containers/ChangePassword";
import DeleteAccount from "../containers/DeleteAccount";
import SecurityPreferences from "../containers/SecurityPreferences";
import TwoFactorAuthentication from "../containers/TwoFactorAuthentication";

export default function Security() {
  return (
    <section className="mt-7">
      <ChangePassword />
      <SecurityPreferences />
      <TwoFactorAuthentication />
      <DeleteAccount />
      <Button className="px-16 my-4">I understand, delete my account</Button>
    </section>
  );
}
