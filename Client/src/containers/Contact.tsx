import ContactForm from "../components/ContactForm";
import ContactInformation from "../components/ContactInformation";
import H2 from "../components/H2";
import {
  BsGeoAltFill,
  BsFillTelephoneFill,
  BsEnvelope,
  BsClockFill,
} from "react-icons/bs";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row my-16 text-neutral-700">
      <div className="md:w-1/2 p-8">
        <H2>Contact Information</H2>
        <ContactInformation
          text="Random Street 11, Ziemia, 00-000 Internet "
          icon={<BsGeoAltFill size={50} />}
        />
        <ContactInformation
          text="+48 000 000 000 / 12 000 12 2345"
          icon={<BsFillTelephoneFill size={50} />}
        />
        <ContactInformation
          text="randomaddress@something.pl"
          icon={<BsEnvelope size={50} />}
        />
        <ContactInformation
          text="12:00 - 19:00 mon-fr 12:00 - 15:00 sat"
          icon={<BsClockFill size={50} />}
        />
      </div>
      <div className="md:w-1/2 p-8">
        <H2>Get In Touch</H2>
        <p>Contact with us!</p>
        <ContactForm />
      </div>
    </section>
  );
}
