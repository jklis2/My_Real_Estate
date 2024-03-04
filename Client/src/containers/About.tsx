import aboutImg from "../assets/AboutImg.png";
import H2 from "../components/H2";
import P from "../components/P"

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center my-16 text-neutral-700 ">
      <div className="md:w-1/2 xl:p-8">
        <H2> My Real Estate: Your Trusted Partner in Property Management</H2>
        <P className="text-gray-700">
          My Real Estate is where reliability meets convenience in property
          management. Trusted by a wide community, our app streamlines buying,
          selling, and renting, ensuring smooth transactions. It’s not just a
          tool, but a community hub for homeowners and tenants, fostering trust
          and simplicity in every interaction. Join us for a more efficient real
          estate experience.
        </P>
      </div>
      <div className="md:w-1/2 md:p-8 2xl:p-16">
        <img className="rounded-lg shadow-md" src={aboutImg} alt="About us" />
      </div>
    </section>
  );
}
