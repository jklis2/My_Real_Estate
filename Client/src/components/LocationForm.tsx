import Input from "./Input";
import H3 from "./H3";
import { useFormContext } from "react-hook-form";
import { LOCATION_INPUTS } from "../consts/locationInputs";

export default function LocationForm() {
  const { register } = useFormContext();

  return (
    <>
      <H3 className="my-10">Location</H3>
      {LOCATION_INPUTS.map((input) => (
        <div
          key={input.id}
          className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col"
        >
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
    </>
  );
}
