import Input from "../shared/Input.tsx";
import H3 from "../shared/H3.tsx";
import { useFormContext } from "react-hook-form";
import { LOCATION_INPUTS } from "../../consts/locationInputs.ts";

export default function LocationForm() {
  const { register } = useFormContext();

  return (
    <>
      <H3 className="my-10">Location</H3>
      <div className="flex flex-wrap -mx-3">
        {LOCATION_INPUTS.map((input) => (
          <div key={input.id} className="w-full sm:w-1/2 px-3 mb-6">
            <div className="flex flex-col w-full">
              <Input
                type="text"
                className="w-full p-3 border border-slate-300 rounded-xl"
                label={input.label}
                id={input.id}
                placeholder={input.placeholder}
                {...register(input.name)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
