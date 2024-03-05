import Button from "./Button";
import ContactInput from "./ContactInput";

export default function ContactForm() {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="w-full flex flex-col sm:flex-row gap-5 my-5">
        <ContactInput className="w-full sm:w-1/2" placeholder="First Name"/>
        <ContactInput className="w-full sm:w-1/2" placeholder="Last Name"/>
      </div>
      <ContactInput className="w-full mb-5" placeholder="E-mail" />
      <ContactInput size="big" className="w-full mb-5" placeholder="Message"/>
      <Button>Send message</Button>
    </form>
  );
}
