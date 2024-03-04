import { useState } from 'react';
import H2 from "../components/H2";
import OfferCard from "../components/OfferCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function LatestOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { location: "Krakow, PL", url: "url('../assets/Gallery1.png')" },
    { location: "London, UK", url: "url('../assets/Gallery2.png')" },
    { location: "Paris, FR", url: "url('../assets/Gallery3.png')" }
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <section className="lg:my-16 text-center">
      <H2>Latest Offers</H2>
      <div className="flex gap-8 justify-center items-center my-10 relative lg:max-w-screen-lg mx-auto">
        <RiArrowLeftSLine size={200} className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10" onClick={prevSlide} />
        {slides.map((slide, index) => (
          <OfferCard
            key={index}
            location={slide.location}
            url={slide.url}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        ))}
        <RiArrowRightSLine size={200} className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={nextSlide} />
      </div>
    </section>
  );
}
