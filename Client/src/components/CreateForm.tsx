import React from "react";
import H3 from "./H3";
import Input from "./Input";
import Select from "./Select";
import FeatureCard from "./FeatureCard";
import { PiTree } from "react-icons/pi";
import Button from "./Button";
import { FEATURES_LIST } from "../consts/features";

export default function CreateForm() {
  const [selectedFeature, setSelectedFeature] = React.useState("");

  const handleFeatureChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFeature(event.target.value);
  };
  return (
    <section>
      <form className="my-10">
        <div className="flex flex-col justify-between gap-3 lg:gap-6 mt-3">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Property name"
              id="name"
              placeholder="Enter property name"
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="upload"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Property photos"
              id="file"
              placeholder="Drop photos of your property"
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
            />
          </div>
        </div>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Price"
              id="price"
              placeholder="Enter price for property"
            />
          </div>
          <div className="flex flex-col w-full">
            <Select
              options={["For Rent", "For Sell"]}
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Type of operation"
              id="operation"
              placeholder="Select type of operation"
            />
          </div>
        </div>
        <H3 className="my-10">Aditional Information</H3>
        <div className="flex flex-wrap gap-12">
          <FeatureCard
            name="Type:"
            icon={<PiTree size={20} />}
            options={["Garage", "Room", "Apartment", "House"]}
          />
          <FeatureCard
            name={"Size:"}
            icon={<PiTree size={20} />}
            input={"s"}
            placeholder="Enter size"
          />
          <FeatureCard
            name={"Rooms:"}
            icon={<PiTree size={20} />}
            input={"s"}
            placeholder="Enter number of rooms"
          />
          <FeatureCard
            name={"People:"}
            icon={<PiTree size={20} />}
            input={"s"}
            placeholder="Enter number of people"
          />
        </div>
        <H3 className="my-10">Features</H3>
        <div className="flex flex-wrap gap-12">
          <Select
            options={FEATURES_LIST}
            className="w-full p-3 border border-slate-300 rounded-xl"
            id="features"
            placeholder="Select a feature"
            selectedOption={selectedFeature}
            onChange={handleFeatureChange}
          />
        </div>
        <H3 className="my-10">Location</H3>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Country"
              id="country"
              placeholder="Enter country"
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Region"
              id="region"
              placeholder="Enter region"
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
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Zip code"
              id="zipCode"
              placeholder="Enter zip code"
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
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Number"
              id="phoneNumber"
              placeholder="Enter number"
            />
          </div>
        </div>
      </form>
      <div className="mb-10">
        <Button>Add Property</Button>
      </div>
    </section>
  );
}
