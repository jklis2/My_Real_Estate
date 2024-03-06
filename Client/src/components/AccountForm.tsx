import Button from "./Button";
import SettingsInput from "./SettingsInput";

export default function AccountForm() {
  return (
    <section>
      <form className="w-full">
        <SettingsInput label="Username" placeholder="Enter username" />
        <div className="flex justify-between gap-6">
          <SettingsInput
            className="w-full"
            label="First Name"
            placeholder="Enter first name"
          />
          <SettingsInput
            className="w-full"
            label="Username"
            placeholder="Enter second Name"
          />
        </div>
        <SettingsInput label="E-mail" placeholder="Enter e-mail" />
        <div className="flex justify-between gap-6">
          <SettingsInput
            className="w-full"
            label="Country"
            placeholder="Enter country"
          />
          <SettingsInput
            className="w-full"
            label="Region"
            placeholder="Enter region"
          />
        </div>
        <div className="flex justify-between gap-6">
          <SettingsInput
            className="w-full"
            label="City"
            placeholder="Enter city"
          />
          <SettingsInput
            className="w-full"
            label="Zip code"
            placeholder="Enter zip code"
          />
        </div>
        <div className="flex justify-between gap-6">
          <SettingsInput
            className="w-full"
            label="Street"
            placeholder="Enter street"
          />
          <SettingsInput
            className="w-full"
            label="Number"
            placeholder="Enter number"
          />
        </div>
        <Button className="mt-2 px-16">Save changes</Button>
      </form>
    </section>
  );
}
