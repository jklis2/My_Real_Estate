import EmailNotifications from "../containers/EmailNotifications";
import NotificationPreferences from "../containers/NotificationPreferences";
import PushNotifications from "../containers/PushNotifications";

export default function Notifications() {
  return (
    <>
      <EmailNotifications />
      <PushNotifications />
      <NotificationPreferences />
    </>
  );
}
