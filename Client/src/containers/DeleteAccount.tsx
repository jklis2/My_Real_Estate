import H2 from "../components/H2";
import P from "../components/P";

export default function DeleteAccount() {
  return (
    <div>
      <H2 className="my-4 mb-0">Delete Account</H2>
      <P>
        Deleting your account is a permanent action and cannot be undone. If you
        are sure you want to delete your account, select the button below.
      </P>
    </div>
  );
}
