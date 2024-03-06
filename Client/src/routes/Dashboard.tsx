import P from "../components/P";
import TimeLine from "../components/TimeLine";
import PropertiesList from "../containers/PropertiesList";
import QuickStats from "../containers/QuickStats";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold">Welcome back, John Doe</h1>
      <P className="mt-3">Here's what's happening with your properties</P>
      <QuickStats />
      <TimeLine />
      <PropertiesList title="Your recent properties"/>
    </div>
  );
}
