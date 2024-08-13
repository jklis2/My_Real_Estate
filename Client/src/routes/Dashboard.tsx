import { useEffect } from "react";
import P from "../components/shared/P.tsx";
import TimeLine from "../components/TimeLine";
import PropertiesList from "../containers/PropertiesList";
import QuickStats from "../containers/QuickStats";
import { useLazyGetUserQuery } from "../services/userApi";
import Error from "../components/shared/Error.tsx";
import { useOwnProperties } from "../hooks/useOwnProperties";

export default function Dashboard() {
  const [getUser, { data, isError }] = useLazyGetUserQuery();

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
      {isError && <Error />}
    </div>
  );
}
