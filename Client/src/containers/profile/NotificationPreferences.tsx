import H2 from 'components/shared/H2.tsx';
import SettingsCheck from 'components/settings/SettingsCheck.tsx';
import Button from 'components/shared/Button.tsx';

export default function NotificationPreferences() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Notification Preferences</H2>
      <div className="flex flex-col">
        <SettingsCheck name="Automatically subscribe to group notifications" />
        <SettingsCheck name="Automatically subscribe to new product notifications" />
      </div>
      <Button className="my-4">Unsubscribe from all notifications</Button>
    </section>
  );
}
