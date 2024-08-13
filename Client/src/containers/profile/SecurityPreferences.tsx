import H2 from "../../components/shared/H2.tsx";
import SettingsRadio from "../../components/settings/SettingsRadio.tsx";

export default function SecurityPreferences() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Security Preferences</H2>
      <SettingsRadio
        name="Account Privacy"
        description="By setting your account to private, your profile information and posts will not be visible to users outside of your user groups."
      />
      <SettingsRadio
        name="Data Sharing"
        description="Sharing usage data can help us to improve our products and better serve our users as they navigate through our application."
      />
    </section>
  );
}
