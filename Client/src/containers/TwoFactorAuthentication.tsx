import H2 from "../components/H2";
import P from "../components/P";
import SettingsInput from "../components/SettingsInput";
import SettingsRadio from "../components/SettingsRadio";

export default function TwoFactorAuthentication() {
  return (
    <>
      <H2 className="my-4 mb-0">Two-Factor Authentication</H2>
      <P>
        Add another level of security to your account by enabling two-factor
        authentication. We will send you a text message to verify your login
        attempts on unrecognized devices and browsers.
      </P>
      <SettingsRadio name="Two-Factor Authentication" />
      <SettingsRadio name="SMS Number" />
      <SettingsInput placeholder="111 222 333" />
    </>
  );
}
