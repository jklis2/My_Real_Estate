import Button from "../shared/Button.tsx";
import Input from "../shared/Input.tsx";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="w-full flex flex-col sm:flex-row gap-5 my-5">
        <Input
          type="text"
          className=" bg-slate-200 p-3 rounded-md outline-none shadow-lg w-full sm:w-1/2"
          placeholder="First Name"
          id="firstName"
        />
        <Input
          type="text"
          className=" bg-slate-200 p-3 rounded-md outline-none shadow-lg w-full sm:w-1/2"
          placeholder="Last Name"
          id="lastName"
        />
      </div>
      <Input
        type="text"
        className=" bg-slate-200 p-3 rounded-md outline-none shadow-lg w-full mb-5"
        placeholder="E-mail"
        id="email"
        autoComplete="email"
      />
      <Input
        type="text"
        size="big"
        className=" bg-slate-200 p-3 rounded-md outline-none shadow-lg w-full mb-5"
        placeholder="Message"
        id="Message"
      />
      <Button>Send message</Button>
    </form>
  );
}
