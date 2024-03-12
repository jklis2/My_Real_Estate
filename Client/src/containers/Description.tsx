import H2 from "../components/H2";
import P from "../components/P";

export default function Description() {
  return (
    <section className="my-10">
      <div className="flex justify-between">
        <H2 className="mb-6">Pacific Heights, San Francisco</H2>
        <H2  className="mb-6">1200$/month</H2>
      </div>
      <P>
        This is a luxury 3 bedroom, 3 bathroom home in the most prestigious
        neighborhood in San Francisco. The home features a spacious living room,
        a gourmet kitchen, a formal dining room, and a private backyard. The
        home also has a private garage for 2 cars.
      </P>
    </section>
  );
}
