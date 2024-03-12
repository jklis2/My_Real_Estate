import Button from "./Button";
import Input from "./Input";

export default function AccountForm() {
  return (
    <section>
      <form className="w-full">
        <div className="flex flex-col">
          <Input
            className="p-3 border border-slate-300 rounded-xl"
            type="text"
            label="Username"
            id="userName"
            placeholder="Enter username"
          />
        </div>
        <div className="flex justify-between gap-6 mt-3">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="First Name"
              id="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Second Name"
              id="secondName"
              placeholder="Enter second Name"
            />
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <Input
            className="p-3 border border-slate-300 rounded-xl"
            type="text"
            label="E-mail"
            id="email"
            placeholder="Enter e-mail"
            autoComplete="email"
          />
        </div>
        <div className="flex justify-between gap-6 mt-3">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Country"
              id="country"
              placeholder="Enter country"
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Region"
              id="region"
              placeholder="Enter region"
            />
          </div>
        </div>
        <div className="flex justify-between gap-6 mt-3">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="City"
              id="city"
              placeholder="Enter city"
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Zip code"
              id="zipCode"
              placeholder="Enter zip code"
            />
          </div>
        </div>

        <div className="flex justify-between gap-6 mt-3">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Street"
              id="street"
              placeholder="Enter street"
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Number"
              id="phoneNumber"
              placeholder="Enter number"
            />
          </div>
        </div>
        <Button className="my-5 px-16">Save changes</Button>
      </form>
    </section>
  );
}