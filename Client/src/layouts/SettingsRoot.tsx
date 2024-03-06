import P from "../components/P";
import { Outlet } from "react-router-dom";

export default function SettingsLayout() {
  return (
    <section>
      <P>AAA</P>
      <Outlet />
    </section>
  );
}
