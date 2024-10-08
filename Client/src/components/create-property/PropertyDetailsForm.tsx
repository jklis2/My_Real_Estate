import Select from 'components/shared/Select.tsx';
import Input from 'components/shared/Input.tsx';
import H3 from 'components/shared/H3.tsx';
import { useFormContext } from 'react-hook-form';
import { PROPERTY_TYPE } from 'consts/propertyType.ts';
import { descriptionValidation, nameValidation } from 'utils/validations.ts';
import { PropertyInputs } from 'interfaces/PropertyInputs.ts';

export default function PropertyDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PropertyInputs>();

  return (
    <>
      <div className="flex flex-col justify-between gap-3 lg:gap-6 mt-3">
        <div className="flex flex-col w-full">
          <Input
            type="text"
            className="w-full p-3 border border-slate-300 rounded-xl"
            label="Property name"
            id="name"
            placeholder="Enter property name"
            {...register('property.name', nameValidation)}
          />
        </div>
        <div className="flex flex-col w-full">
          <Input
            type="file"
            multiple={true}
            className="w-full p-3 border border-slate-300 rounded-xl"
            label="Property photos"
            id="file"
            placeholder="Drop photos of your property"
            {...register('property.photos')}
          />
        </div>
        <div className="flex flex-col w-full">
          <Input
            type="text"
            className="w-full p-3 border border-slate-300 rounded-xl"
            label="Description"
            id="description"
            placeholder="Enter property description"
            size="big"
            {...register('property.description', descriptionValidation)}
            error={errors?.property?.description?.message?.toString() || ''}
          />
        </div>
      </div>
      <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
        <div className="flex flex-col w-full my-2">
          <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Price" id="price" placeholder="Enter price for property" {...register('property.price')} />
        </div>
        <div className="flex flex-col w-full">
          {/*IT DOES NOT EXIST ON BACKEND*/}
          <Select options={['For Rent', 'For Sell']} className="w-full p-3 border border-slate-300 rounded-xl" label="Type of operation" id="operation" placeholder="Select type of operation" />
        </div>
      </div>
      <H3 className="my-10">Additional Information</H3>
      <div className="flex flex-wrap">
        <div className="flex w-full sm:flex-row flex-col gap-12">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Select
              options={PROPERTY_TYPE}
              className="p-3 border border-slate-300 rounded-xl"
              label="Property type"
              id="propertyTypeName"
              placeholder="Select type of property"
              {...register('propertyType.propertyTypeName')}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl my-2" label="Size" id="size" placeholder="Enter size of property" {...register('property.size')} />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col gap-12">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Amount of rooms" id="noRooms" placeholder="Enter amount of rooms" {...register('property.numberOfRooms')} />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input
              type="text"
              className="p-3 border border-slate-300 rounded-xl"
              label="Amount of people"
              id="noPeople"
              placeholder="Enter amount of people"
              {...register('property.numberOfPeople')}
            />
          </div>
        </div>
      </div>
    </>
  );
}
