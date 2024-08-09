import CreatePropertyForm from "../components/create-property/CreatePropertyForm.tsx";
import H2 from "../components/H2";

export default function CreateProperty() {
  return (
    <section className="mx-8">
      <H2>Create Property</H2>
      <CreatePropertyForm />
    </section>
  );
}
