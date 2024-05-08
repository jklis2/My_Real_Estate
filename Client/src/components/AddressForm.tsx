import Input from "./Input";
import Button from "./Button";
import { Address } from "../interfaces/Address";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useEditAddressMutation } from "../services/addressApi";
import Alert from "./Alert";
import { useState } from "react";

export default function AddressForm(addressData: Address) {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm<Address>();
  const [editAddress, { error }] = useEditAddressMutation();

  useEffect(() => {
    if (addressData) {
      reset(addressData);
    }
  }, [addressData, reset]);

  const onSubmit: SubmitHandler<Address> = (data) => {
    try {
      editAddress(data);
      setShow(true);
    } catch {
      setShow(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Country"
              id="country"
              placeholder="Enter country"
              {...register("country")}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Region"
              id="region"
              placeholder="Enter region"
              {...register("region")}
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="City"
              id="city"
              placeholder="Enter city"
              {...register("city")}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Zip code"
              id="zipCode"
              placeholder="Enter zip code"
              {...register("zipCode")}
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Street"
              id="street"
              placeholder="Enter street"
              {...register("streetName")}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Number"
              id="phoneNumber"
              placeholder="Enter number"
              {...register("streetNumber")}
            />
          </div>
        </div>
        <Button className="my-5 px-16">Save changes</Button>
      </form>

      {error && show && (
        <Alert
          name="An error occured!"
          type="Error"
          isVisible={show}
          onClose={() => setShow(false)}
        />
      )}

      {!error && show && (
        <Alert
          name="Address updated successfully"
          type="Success"
          isVisible={show}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
}
