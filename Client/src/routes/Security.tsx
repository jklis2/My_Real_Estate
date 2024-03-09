import ChangePassword from "../containers/ChangePassword";
import DeleteAccount from "../containers/DeleteAccount";
import SecurityPreferences from "../containers/SecurityPreferences";
import TwoFactorAuthentication from "../containers/TwoFactorAuthentication";

export default function Security() {
  return (
    <>
      <ChangePassword />
      <SecurityPreferences />
      <TwoFactorAuthentication />
      <DeleteAccount />
    </>
  );
}
