import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";
import HeroSelect from "./HeroSelect";
import Input from "./Input";

export default function HeroForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="px-8 mb-16 z-10 relative"
    >
      <div className="lg:px-16 ">
        <div className="lg:bg-slate-50 opacity-80 rounded-full flex flex-col gap-3 mt-8 lg:mt-0 lg:flex-row">
          <HeroSelect name="transaction" id="" text="For sell" />
          <HeroSelect name="property" id="" text="Property" />
          <Input
            type="text"
            id="search"
            placeholder="Search location or name"
            className="outline-none w-full px-6 sm:text-2xl bg-slate-50 lg:bg-transparent py-5 rounded-full lg:rounded-none"
          />
          <div className="flex align-center py-2 me-2">
            <Button className="w-full flex justify-center lg:block">
              <IoSearchOutline size={25} />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
