import H2 from "../components/H2";
import P from "../components/P";
import Input from "../components/Input";
import SettingsRadio from "../components/SettingsRadio";

export default function TwoFactorAuthentication() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Two-Factor Authentication</H2>
      <P>
        Add another level of security to your account by enabling two-factor
        authentication. We will send you a text message to verify your login
        attempts on unrecognized devices and browsers.
      </P>
      <SettingsRadio name="Two-Factor Authentication" />
      <SettingsRadio name="SMS Number" />

      <Input type="text" className="p-3 border border-slate-300 rounded-xl w-full" id="phoneNumber" placeholder="111 222 333"/>
    </section>
   );
}
