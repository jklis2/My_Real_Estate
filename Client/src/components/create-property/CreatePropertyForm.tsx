import H3 from 'components/shared/H3.tsx';
import MultiSelect from 'components/shared/MultiSelect.tsx';
import Button from 'components/shared/Button.tsx';
import PropertyDetailsForm from 'components/create-property/PropertyDetailsForm.tsx';
import LocationForm from 'components/create-property/LocationForm.tsx';
import { PropertyInputs } from 'interfaces/PropertyInputs.ts';
import { useCreateProperty } from 'hooks/useCreateProperty.ts';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

export default function CreatePropertyForm() {
  const methods = useForm<PropertyInputs>();
  const { handleSubmit } = methods;
  const { createProperty } = useCreateProperty();

  const onSubmit: SubmitHandler<PropertyInputs> = async data => createProperty(data);

  return (
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
  );
}
