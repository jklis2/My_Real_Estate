import H2 from "../components/H2";
import SettingsCheck from "../components/SettingsCheck";
import SettingsInput from "../components/SettingsInput";

export default function EmailNotifications() {
  return (
    <>
      <H2 className="my-4 mb-0">Email Notifications</H2>
      <SettingsInput label="Default notification email" value="user@gmail.com"></SettingsInput>
      <div className="flex flex-col">
        <SettingsCheck name="Changes made to your account" />
        <SettingsCheck name="Changes are made to groups you're part of" />
        <SettingsCheck name="Product updates for products you've purchased or starred" />
        <SettingsCheck name="Information on new products and services" />
        <SettingsCheck name="Marketing and promotional offers" />
      </div>
    </>
  );
}
