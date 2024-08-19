import Select from 'components/shared/Select.tsx';
import Input from 'components/shared/Input.tsx';
import { PROPERTY_TYPE } from 'consts/propertyType.ts';
import MultiSelect from 'components/shared/MultiSelect.tsx';

export default function AdvancedForm() {
  return (
    <div className="mt-3">
      <div className="flex flex-wrap">
        <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Minimum price" id="minPrice" placeholder="Enter minimum price" />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Maximum price" id="maxPrice" placeholder="Enter maximum price" />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Select options={PROPERTY_TYPE} className="p-3 border border-slate-300 rounded-xl" label="Property type" id="operation" placeholder="Select type of property" />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col mt-2">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Size" id="size" placeholder="Enter size of property" />
          </div>
        </div>
        <div className="flex w-full sm:flex-row flex-col gap-10 mt-3">
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Amount of rooms" id="noRooms" placeholder="Enter amount of rooms" />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col">
            <Input type="text" className="p-3 border border-slate-300 rounded-xl" label="Amount of people" id="noPeople" placeholder="Enter amount of people" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        <MultiSelect />
      </div>
    </div>
  );
}
