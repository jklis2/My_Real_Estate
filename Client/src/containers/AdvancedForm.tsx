import Select from "../components/Select";
import Input from "../components/Input";
import { PROPERTY_TYPE } from "../consts/propertyType";

export default function AdvancedForm() {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap">
        <div className="flex w-full sm:flex-row flex-col gap-10">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input
              type="text"
              className="p-3 border border-slate-300 rounded-xl"
              label="Minimum price"
              id="minPrice"
              placeholder="Enter minimum price"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input
              type="text"
              className="p-3 border border-slate-300 rounded-xl"
              label="Maximum price"
              id="maxPrice"
              placeholder="Enter maximum price"
            />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col gap-12">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Select
              options={PROPERTY_TYPE}
              className="p-3 border border-slate-300 rounded-xl"
              label="Property type"
              id="operation"
              placeholder="Select type of property"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col mt-2">
            <Input
              type="text"
              className="p-3 border border-slate-300 rounded-xl"
              label="Size"
              id="size"
              placeholder="Enter size of property"
            />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col gap-12">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input
              type="text"
              className="p-3 border border-slate-300 rounded-xl"
              label="Amount of rooms"
              id="noRooms"
              placeholder="Enter amount of rooms"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input
              type="text"
              className="p-3 border border-slate-300 rounded-xl"
              label="Amount of people"
              id="noPeople"
              placeholder="Enter amount of people"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-12">
        <Select
          options={["Feature 1", "Feature 2"]}
          className="p-3 border border-slate-300 rounded-xl"
          label="Features"
          id="operation"
          placeholder="Select features which you want"
        />
      </div>
    </div>
  );
}
