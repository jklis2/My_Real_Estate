import H2 from 'components/shared/H2.tsx';
import StatsCard from 'components/StatsCard';
import totalProperties from 'assets/icons/totalProperties.svg';
import totalUsers from 'assets/icons/totalUsers.svg';
import totalRevenue from 'assets/icons/totalRevenue.svg';

export default function AllStats() {
  return (
    <>
      <H2 className="mb-4">All statisics</H2>
      <div className="flex gap-8 me-6 lg:flex-row flex-col">
        <StatsCard icon={<img src={totalProperties} width={40} height={40} />} name="Total properties" amount="5.920" />
        <StatsCard icon={<img src={totalUsers} width={40} height={40} />} name="Total residents" amount="12.820" />
        <StatsCard icon={<img src={totalRevenue} width={40} height={40} />} name="Total revenue" amount="$1.240.000" />
      </div>
    </>
  );
}
