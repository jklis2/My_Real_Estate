import React, { Suspense } from "react";
import H2 from "../components/shared/H2.tsx";
import OfferCard from "../components/OfferCard";
import { SLIDES } from "../consts/slides";
import { useInView } from "react-intersection-observer";
import Loader from "../components/shared/Loader.tsx";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";

const Slider = React.lazy(() => import("react-slick"));

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="text-neutral-700 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <img alt="arrow icon" src={rightArrow} width={70} height={70} />
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="text-neutral-700 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <img alt="arrow icon" src={leftArrow} width={70} height={70} />
    </div>
  );
};

export default function LatestOffers() {
  const { ref: offersRef, inView: cardsAreVisible } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:my-16 text-center relative" ref={offersRef}>
      <H2 className="mb-8">Latest Offers</H2>

      <Suspense fallback={<Loader />}>
        {cardsAreVisible && (
          <Slider {...settings}>
            {SLIDES.map((slide, index) => (
              <div key={index} className="px-4">
                <OfferCard location={slide.location} url={slide.url} />
              </div>
            ))}
          </Slider>
        )}
      </Suspense>
    </section>
  );
}
