import Input from 'components/shared/Input.tsx';
import Button from '../shared/Button.tsx';
import { Address } from 'interfaces/Address.ts';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { useEditAddressMutation } from 'services/addressApi.ts';
import Alert from 'components/shared/Alert.tsx';
import { useState } from 'react';

export default function AddressForm(addressData: Address) {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm<Address>();
  const [editAddress, { error, isLoading }] = useEditAddressMutation();

  useEffect(() => {
    if (addressData) {
      reset(addressData);
    }
  }, [addressData, reset]);

  const onSubmit: SubmitHandler<Address> = async data => {
    try {
      await editAddress(data).unwrap();
      if (!isLoading) {
        setShow(true);
      }
    } catch {
      if (!isLoading) {
        setShow(true);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Country" id="country" placeholder="Enter country" {...register('country')} />
          </div>
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Region" id="region" placeholder="Enter region" {...register('region')} />
          </div>
        </div>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="City" id="city" placeholder="Enter city" {...register('city')} />
          </div>
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Zip code" id="zipCode" placeholder="Enter zip code" {...register('zipCode')} />
          </div>
        </div>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Street" id="street" placeholder="Enter street" {...register('streetName')} />
          </div>
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Number" id="phoneNumber" placeholder="Enter number" {...register('streetNumber')} />
          </div>
        </div>
        <Button className="my-5 px-16">Save changes</Button>
      </form>

      {!isLoading && error && show && (
        <Alert
          name={typeof error === 'object' && true && 'data' in error ? (error.data as { message?: string }).message || 'An error occurred.' : 'An error occurred.'}
          type="Error"
          isVisible={show}
          onClose={() => setShow(false)}
        />
      )}

      {!isLoading && !error && show && <Alert name="Address updated successfully" type="Success" isVisible={show} onClose={() => setShow(false)} />}
    </>
  );
}
