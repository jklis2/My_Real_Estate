import Button from "../components/Button";
import H2 from "../components/H2";
import SettingsInput from "../components/SettingsInput";

export default function ChangePassword() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Change Password</H2>
      <SettingsInput placeholder="Enter current password" />
      <SettingsInput placeholder="Enter new password" />
      <SettingsInput placeholder="Confirm new password" />
      <Button className="px-16 my-5">Save</Button>
    </section>
  );
}
