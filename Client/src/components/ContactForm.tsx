import Button from "./Button";
import ContactInput from "./ContactInput";

export default function ContactForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="w-full flex flex-col sm:flex-row gap-5 my-5">
        <ContactInput className="w-full sm:w-1/2" placeholder="First Name" id="firstName"/>
        <ContactInput className="w-full sm:w-1/2" placeholder="Last Name" id="lastName"/>
      </div>
      <ContactInput className="w-full mb-5" placeholder="E-mail" id="email" autocomplete="email"/>
      <ContactInput size="big" className="w-full mb-5" placeholder="Message" id="Message"/>
      <Button>Send message</Button>
    </form>
  );
}
