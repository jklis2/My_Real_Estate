import React, { Suspense } from 'react';
import About from 'containers/About';
import Hero from 'containers/Hero';
import LatestOffers from 'containers/LatestOffers';
import HowItWorks from 'containers/HowItWorks';
import FAQ from 'containers/FAQ';
import Loader from 'components/shared/Loader.tsx';
import PricingPlans from 'containers/PricingPlans';

const Contact = React.lazy(() => import('../containers/Contact'));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LatestOffers />
      <PricingPlans />
      <HowItWorks />
      <FAQ />
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
    </main>
  );
}
