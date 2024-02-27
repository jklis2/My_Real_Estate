import About from "../containers/About";
import Hero from "../containers/Hero";
import LatestOffers from "../containers/LatestOffers";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LatestOffers />
    </main>
  );
}
