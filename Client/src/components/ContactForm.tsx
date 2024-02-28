import Button from "./Button";
import ContactInput from "./ContactInput";

export default function ContactForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="w-full flex my-5">
        <ContactInput className="w-1/2 me-2" placeholder="First Name"/>
        <ContactInput className="w-1/2 ml-2" placeholder="Last Name"/>
      </div>
      <ContactInput className="w-full mb-5" placeholder="E-mail" />
      <ContactInput size="big" className="w-full mb-5" placeholder="Message"/>
      <Button>Send message</Button>
    </form>
  );
}