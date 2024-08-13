import H2 from "../../components/shared/H2.tsx";
import P from "../../components/shared/P.tsx";
import Button from "../../components/shared/Button.tsx";

export default function DeleteAccount() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Delete Account</H2>
      <P>
        Deleting your account is a permanent action and cannot be undone. If you
        are sure you want to delete your account, select the button below.
      </P>
      <Button className="px-16 my-4">I understand, delete my account</Button>
    </section>
  );
}
