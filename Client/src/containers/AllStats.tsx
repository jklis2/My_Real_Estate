import H2 from "../components/H2";
import StatsCard from "../components/StatsCard";
import { BsPerson, BsBuildings, BsCreditCard, BsUnlock  } from "react-icons/bs";

export default function AllStats() {
  return (
    <section className="my-10" >
      <H2 className="mb-4">All statisics</H2>
      <div className="flex gap-8 me-6">
        <StatsCard
          icon={<BsBuildings size={40} className="mb-3" />}
          name="Total properties"
          amount="5.920"
        />
        <StatsCard
          icon={<BsPerson size={40} className="mb-3" />}
          name="Total residents"
          amount="12.820"
        />
        <StatsCard
          icon={<BsCreditCard size={40} className="mb-3" />}
          name="Total revenue"
          amount="$1.240.000"
        />
        <StatsCard
          icon={<BsUnlock  size={40} className="mb-3" />}
          name="Total leases"
          amount="3.820"
        />
      </div>
    </section>
  );
}
