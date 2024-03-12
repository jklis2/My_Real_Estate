import H2 from "../components/H2";
import Input from "../components/Input";
import SettingsCheck from "../components/SettingsCheck";

export default function EmailNotifications() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Email Notifications</H2>
      <div className="flex flex-col">
        <Input
          type="text"
          className="p-3 border border-slate-300 rounded-xl"
          label="Default notification email"
          value="user@gmail.com"
        />
      </div>
      <div className="flex flex-col">
        <SettingsCheck name="Changes made to your account" />
        <SettingsCheck name="Changes are made to groups you're part of" />
        <SettingsCheck name="Product updates for products you've purchased or starred" />
        <SettingsCheck name="Information on new products and services" />
        <SettingsCheck name="Marketing and promotional offers" />
      </div>
    </section>
  );
}
