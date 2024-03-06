import AccountDetails from "../containers/AccountDetails";
import UploadAvatar from "../containers/UploadAvatar";

export default function Profile() {
  return (
    <div>
      <UploadAvatar />
      <AccountDetails />
    </div>
  );
}
