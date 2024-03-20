import React, { Suspense } from "react";
import About from "../containers/About";
import Hero from "../containers/Hero";
import LatestOffers from "../containers/LatestOffers";
import HowItWorks from "../containers/HowItWorks";
import FAQ from "../containers/FAQ";
import Loader from "../components/Loader";

const Contact = React.lazy(() => import("../containers/Contact"));
const PricingPlans = React.lazy(() => import("../containers/PricingPlans"));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LatestOffers />
      <Suspense fallback={<Loader />}>
        <PricingPlans />
      </Suspense>
      <HowItWorks />
      <FAQ />
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
    </main>
  );
}
