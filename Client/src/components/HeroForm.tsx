import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";
import HeroSelect from "./HeroSelect";
import HeroInput from "./HeroInput";

export default function HeroForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="px-8 mb-16 z-10 relative"
    >
      <div className="lg:px-16 ">
        <div className="lg:bg-slate-50 opacity-80 rounded-full flex flex-col gap-3 lg:flex-row">
          <HeroSelect name="transaction" id="" text="For sell" />
          <HeroSelect name="property" id="" text="Property" />
          <HeroInput type="text" placeholder="Search location or name" />
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
