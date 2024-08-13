import H2 from "../../components/shared/H2.tsx";
import ProfileForms from "../../components/profile/ProfileForms.tsx";

export default function AccountDetails() {
  return (
    <section>
      <H2 className="mb-4">Account Details</H2>
      <ProfileForms />
    </section>
  );
}
