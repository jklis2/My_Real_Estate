import ChangePassword from "../containers/profile/ChangePassword.tsx";
import DeleteAccount from "../containers/profile/DeleteAccount.tsx";
import SecurityPreferences from "../containers/profile/SecurityPreferences.tsx";
import TwoFactorAuthentication from "../containers/profile/TwoFactorAuthentication.tsx";

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
