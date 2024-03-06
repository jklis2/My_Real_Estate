import Button from "../components/Button";
import EmailNotifications from "../containers/EmailNotifications";
import NotificationPreferences from "../containers/NotificationPreferences";
import PushNotifications from "../containers/PushNotifications";

export default function Notifications() {
  return (
    <section className="mt-7">
      <EmailNotifications />
      <PushNotifications />
      <NotificationPreferences />
      <Button className="my-5">Unsubscribe from all notifications</Button>
    </section>
  );
}
