import ContactForm from "../components/contact/ContactForm.tsx";
import ContactInformation from "../components/contact/ContactInformation.tsx";
import H2 from "../components/shared/H2.tsx";
import phone from "../assets/icons/phone.svg";
import clock from "../assets/icons/clock.svg";
import envelope from "../assets/icons/envelope.svg";
import pin from "../assets/icons/pin.svg";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row my-16 text-neutral-700">
      <div className="md:w-1/2 p-8">
        <H2 className="text-center sm:text-left">Contact Information</H2>
        <ContactInformation
          text="Random Street 11, Ziemia, 00-000 Internet "
          icon={<img src={pin} alt="pin icon" width={50} height={50} />}
        />
        <ContactInformation
          text="+48 000 000 000 / 12 000 12 2345"
          icon={<img src={phone} alt="pin icon" width={50} height={50} />}
        />
        <ContactInformation
          text="randomaddress@something.pl"
          icon={<img src={envelope} alt="pin icon" width={50} height={50} />}
        />
        <ContactInformation
          text="12:00 - 19:00 mon-fr 12:00 - 15:00 sat"
          icon={<img src={clock} alt="pin icon" width={50} height={50} />}
        />
      </div>
      <div className="md:w-1/2 p-8">
        <H2 className="mb-4">Get In Touch</H2>
        <p>Contact with us!</p>
        <ContactForm />
      </div>
    </section>
  );
}
