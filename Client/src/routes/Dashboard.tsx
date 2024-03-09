import P from "../components/P";
import TimeLine from "../components/TimeLine";
import PropertiesList from "../containers/PropertiesList";
import QuickStats from "../containers/QuickStats";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome back, John Doe</h1>
      <P>Here's what's happening with your properties</P>
      <QuickStats />
      <TimeLine />
      <PropertiesList title="Your recent properties"/>
    </div>
  );
}
