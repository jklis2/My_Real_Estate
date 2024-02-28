import About from "../containers/About";
import Contact from "../containers/Contact";
import Hero from "../containers/Hero";
import LatestOffers from "../containers/LatestOffers";
import PricingPlans from "../containers/PricingPlans";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LatestOffers />
      <PricingPlans />
      <Contact />
    </main>
  );
}
