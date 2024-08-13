import EmailNotifications from "../containers/profile/EmailNotifications.tsx";
import NotificationPreferences from "../containers/profile/NotificationPreferences.tsx";
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
