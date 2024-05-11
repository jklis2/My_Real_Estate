import FeatureCard from "./FeatureCard";
import Select from "./Select";
import Input from "./Input";
import H3 from "./H3";
import { useFormContext } from "react-hook-form";

export default function PropertyDetailsForm() {
  const { register } = useFormContext();

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
            {...register("property.name")}
          />
        </div>
        <div className="flex flex-col w-full">
          <Input
            type="file"
            className="w-full p-3 border border-slate-300 rounded-xl"
            label="Property photos"
            id="file"
            placeholder="Drop photos of your property"
            {...register("property.photos[0]")}
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
            {...register("property.description")}
          />
        </div>
      </div>
      <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
        <div className="flex flex-col w-full my-2">
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
        <div className="flex w-full gap-12">
          <FeatureCard
            className="w-1/2"
            name="Type:"
            options={[
              "House",
              "Apartment",
              "Villa",
              "Multi-family building",
              "Single-family building",
              "Tenement house",
              "Studio apartment",
              "Garage",
            ]}
          />
          <FeatureCard
            className="w-1/2"
            name="Size:"
            input="size"
            placeholder="Enter size"
          />
        </div>
        <div className="flex w-full gap-12">
          <FeatureCard
            className="w-1/2"
            name="Rooms:"
            input="noRooms"
            placeholder="Enter number of rooms"
          />
          <FeatureCard
            className="w-1/2"
            name="People:"
            input="noPeople"
            placeholder="Enter number of people"
          />
        </div>
      </div>
    </>
  );
}
