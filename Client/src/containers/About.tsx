import aboutImg from "../assets/AboutImg.webp";
import H2 from "../components/shared/H2.tsx";
import P from "../components/shared/P.tsx";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center my-16 text-neutral-700 ">
      <div className="md:w-1/2 p-8">
        <H2 className="mb-8">
          My Real Estate: Your Trusted Partner in Property Management
        </H2>
        <P className="text-gray-700">
          My Real Estate is where reliability meets convenience in property
          management. Trusted by a wide community, our app streamlines buying,
          selling, and renting, ensuring smooth transactions. It’s not just a
          tool, but a community hub for homeowners and tenants, fostering trust
          and simplicity in every interaction. Join us for a more efficient real
          estate experience.
        </P>
      </div>
      <div className="md:w-1/2 md:p-8 p-8">
        <img
          className="rounded-lg shadow-md w-full"
          src={aboutImg}
          alt="About us"
          loading="lazy"
        />
      </div>
    </section>
  );
}
