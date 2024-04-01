import { useEffect } from "react";
import BurgerMenu from "../components/BurgerMenu";
import UserAvatar from "../components/UserAvatar";
import { useLazyGetUserQuery } from "../services/userApi";

interface NavProps {
  toggleSidebar: () => void;
}

export default function DashboardNav({ toggleSidebar }: NavProps) {
  const [getUser, { data: userData }] = useLazyGetUserQuery();

  useEffect(() => {
    getUser("");
  }, [getUser]);

  return (
    <header
      className="w-full flex items-center justify-between p-6"
      aria-label="Navigation menu"
    >
      <BurgerMenu toggleMenu={toggleSidebar} />
      {userData && <UserAvatar userId={userData.result[0].id} />}
    </header>
  );
}