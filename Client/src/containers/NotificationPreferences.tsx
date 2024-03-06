import H2 from "../components/H2";
import SettingsCheck from "../components/SettingsCheck";

export default function NotificationPreferences() {
  return (
    <div>
      <H2 className="my-4 mb-0">Notification Preferences</H2>
      <div className="flex flex-col">
        <SettingsCheck name="Automatically subscribe to group notifications" />
        <SettingsCheck name="Automatically subscribe to new product notifications" />
      </div>
    </div>
  );
}
