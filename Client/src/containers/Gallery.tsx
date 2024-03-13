import React from "react";
import Slider from "react-slick";
import Photo from "../components/Photo";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FunctionComponent<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className={`text-slate-500 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10`}
      onClick={onClick}
    >
      <RiArrowRightSLine size={80}/>
    </div>
  );
};

const PrevArrow: React.FunctionComponent<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className={`text-slate-500 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 `}
      onClick={onClick}
    >
      <RiArrowLeftSLine size={80}/>
    </div>
  );
};

export default function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section className="my-6">
      <div className="sm:h-72 md:h-96 lg:h-128">
        <img
          className="w-full h-full rounded-2xl"
          src="https://picsum.photos/2160/1440"
          alt="Sample"
        />
      </div>
      <Slider {...settings} className="mt-6">
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </Slider>
    </section>
  );
}
