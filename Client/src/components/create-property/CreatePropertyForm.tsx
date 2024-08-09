import H3 from "../H3.tsx";
import MultiSelect from "../MultiSelect.tsx";
import Button from "../Button.tsx";
import PropertyDetailsForm from "./PropertyDetailsForm.tsx";
import LocationForm from "./LocationForm.tsx";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Property } from "../../interfaces/Property.ts";
import { Address } from "../../interfaces/Address.ts";
import { PropertyType } from "../../interfaces/PropertyType.ts";
import { useCreateProperty } from "../../hooks/useCreateProperty.ts";

interface PropertyInputs {
  property: Property;
  address: Address;
  propertyType: PropertyType;
}

export default function CreatePropertyForm() {
  const methods = useForm<PropertyInputs>();
  const { handleSubmit } = methods;
  const { createProperty } = useCreateProperty();

  const onSubmit: SubmitHandler<PropertyInputs> = async (data) => createProperty(data);

  return (
    <section>
      <FormProvider {...methods}>
        <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
          <PropertyDetailsForm />
          <H3 className="my-10">Features</H3>
          <div className="flex flex-wrap gap-12">
            <MultiSelect />
          </div>
          <LocationForm />
          <div className="mt-10">
            <Button>Add Property</Button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
