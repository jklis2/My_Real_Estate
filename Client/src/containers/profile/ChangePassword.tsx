import Button from "../../components/shared/Button.tsx";
import H2 from "../../components/shared/H2.tsx";
import Input from "../../components/shared/Input.tsx";

export default function ChangePassword() {
  return (
    <section className="my-10">
      <H2 className="mb-6">Change Password</H2>
      <div className="flex flex-col mt-5">
        <Input
          type="text"
          id="currentPassword"
          className="p-3 border border-slate-300 rounded-xl"
          placeholder="Enter current password"
        />
      </div>
      <div className="flex flex-col mt-5">
        <Input
          type="text"
          id="newPassword"
          className="p-3 border border-slate-300 rounded-xl"
          placeholder="Enter new password"
        />
      </div>
      <div className="flex flex-col mt-5">
        <Input
          type="text"
          id="confirmNewPassword"
          className="p-3 border border-slate-300 rounded-xl"
          placeholder="Confirm new password"
        />
      </div>
      <Button className="px-16 my-5">Save</Button>
    </section>
  );
}
