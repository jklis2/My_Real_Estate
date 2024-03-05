import React from "react";
import Slider from "react-slick";
import H2 from "../components/H2";
import OfferCard from "../components/OfferCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { SLIDES } from "../consts/slides";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="text-neutral-700 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <RiArrowRightSLine size={100} />
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="text-neutral-700 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <RiArrowLeftSLine size={100} />
    </div>
  );
};

export default function LatestOffers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="lg:my-16 text-center relative">
      <H2>Latest Offers</H2>
      <Slider {...settings}>
        {SLIDES.map((slide, index) => (
          <div key={index} className="px-4">
            <OfferCard location={slide.location} url={slide.url} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
