import Button from "../components/Button";
import H2 from "../components/H2";
import SettingsInput from "../components/SettingsInput";

export default function ChangePassword() {
  return (
    <>
      <H2 className="my-4 mb-6">Change Password</H2>
      <SettingsInput placeholder="Enter current password" />
      <SettingsInput placeholder="Enter new password" />
      <SettingsInput placeholder="Confirm new password" />
      <Button className="px-16 my-5">Save</Button>
    </>
  );
}
