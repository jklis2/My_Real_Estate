import { useEffect } from "react";
import { useLazyGetAddressQuery } from "../services/addressApi";
import { useGetUserQuery } from "../services/userApi";
import Button from "./Button";
import Input from "./Input";
import { Address } from "../interfaces/Address";

export default function AccountForm() {
  const [getAddress, { data }] = useLazyGetAddressQuery();
  const { data: userData } = useGetUserQuery(null);

  useEffect(() => {
    getAddress("");
  }, [getAddress]);

  const addressData =
    data?.result.filter((address: Address) => address.userId !== null)[0] ?? [];

  const userDetails = userData && userData.result[0];

  return (
    <section>
      <form className="w-full">
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="First Name"
              id="firstName"
              placeholder="Enter first name"
              value={userDetails.firstName}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Last Name"
              id="lastName"
              placeholder="Enter last Name"
              value={userDetails.lastName}
            />
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <Input
            className="p-3 border border-slate-300 rounded-xl"
            type="text"
            label="E-mail"
            id="email"
            placeholder="Enter e-mail"
            autoComplete="email"
            value={userDetails.email}
          />
        </div>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Country"
              id="country"
              placeholder="Enter country"
              value={addressData.country}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Region"
              id="region"
              placeholder="Enter region"
              value={addressData.region}
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
              value={addressData.city}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Zip code"
              id="zipCode"
              placeholder="Enter zip code"
              value={addressData.zipCode}
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
              value={addressData.streetName}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Number"
              id="phoneNumber"
              placeholder="Enter number"
              value={addressData.streetNumber}
            />
          </div>
        </div>
        <Button className="my-5 px-16">Save changes</Button>
      </form>
    </section>
  );
}
