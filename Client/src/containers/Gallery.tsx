import React from "react";
import Slider from "react-slick";
import Photo from "../components/Photo";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FunctionComponent<ArrowProps> = ({ style, onClick }) => {
  return (
    <div
      className={`text-slate-500 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10`}
      style={{ ...style, display: "block", fontSize: "50px" }}
      onClick={onClick}
    >
      <RiArrowRightSLine />
    </div>
  );
};

const PrevArrow: React.FunctionComponent<ArrowProps> = ({ style, onClick }) => {
  return (
    <div
      className={`text-slate-500 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 `}
      style={{ ...style, display: "block", fontSize: "50px" }}
      onClick={onClick}
    >
      <RiArrowLeftSLine />
    </div>
  );
};

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="my-6">
      <div className="h-96">
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
};

export default Gallery;
