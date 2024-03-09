import Button from "../components/Button";
import H2 from "../components/H2";
import SettingsCheck from "../components/SettingsCheck";
import SettingsInput from "../components/SettingsInput";

export default function PushNotifications() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Push Notifications</H2>
      <SettingsInput label="Default SMS number" value="563 634 926"></SettingsInput>
      <div className="flex flex-col">
        <SettingsCheck name="Someone comments on your post" />
        <SettingsCheck name="Someone shares your post" />
        <SettingsCheck name="A user follows your account" />
        <SettingsCheck name="New posts are made in groups you're part of" />
      </div>
      <Button className="my-4">Save Changes</Button>
    </section>
  );
}
