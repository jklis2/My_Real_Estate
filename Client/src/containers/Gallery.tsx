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

const NextArrow: React.FunctionComponent<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`text-neutral-700 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 ${className}`}
      style={{ ...style, display: "block", fontSize: "50px" }}
      onClick={onClick}
    >
      <RiArrowRightSLine />
    </div>
  );
};

const PrevArrow: React.FunctionComponent<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={`text-neutral-700 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 ${className}`}
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
          className="w-full h-full"
          src="https://picsum.photos/2160/1440"
          alt="Sample"
        />
      </div>
      <Slider {...settings}>
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
