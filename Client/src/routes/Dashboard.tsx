import { useEffect } from "react";
import P from "../components/P";
import TimeLine from "../components/TimeLine";
import PropertiesList from "../containers/PropertiesList";
import QuickStats from "../containers/QuickStats";
import { useLazyGetUserQuery } from "../services/userApi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useOwnProperties } from "../hooks/useOwnProperties";

export default function Dashboard() {
  const [getUser, { data, isLoading, isError }] = useLazyGetUserQuery();

  useEffect(() => {
    getUser("");
  }, [getUser]);

  const user = data && data.result[0];

  const properties = useOwnProperties();
  return (
    <div className="p-6">
      {data && (
        <>
          <h1 className="text-5xl font-bold mb-4">
            Welcome back, {user.firstName} {user.lastName}
          </h1>
          <P>Here's what's happening with your properties</P>
          <QuickStats />
          <TimeLine />
          <PropertiesList
            title="Your recent properties: "
            properties={properties?.result?.slice(-3)}
            addresses={properties?.addresses}
          />
        </>
      )}
      {isLoading && <Loader />}
      {isError && <Error />}
    </div>
  );
}
