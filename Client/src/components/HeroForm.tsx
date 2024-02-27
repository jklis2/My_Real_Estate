import Button from "./Button";
import { IoSearchOutline } from "react-icons/io5";
import HeroSelect from "./HeroSelect";
import HeroInput from "./HeroInput";

export default function HeroForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="px-16 mb-16 z-10 relative"
    >
      <div className="px-16 ">
        <div className="bg-slate-50 opacity-80 h-16 rounded-full flex justify-stretch">
        <HeroSelect name="transaction" id="" text="For sell"/>
        <HeroSelect name="property" id="" text="Property"/>
        <HeroInput type="text" placeholder = "Search location or name" />
          <div className="flex align-center py-2 me-2">
            <Button>
              <IoSearchOutline size={25} />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
