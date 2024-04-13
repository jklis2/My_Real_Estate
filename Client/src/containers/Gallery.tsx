import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Photo from "../components/Photo";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePhoto from "../hooks/usePhoto";

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface GalleryProps {
  propertyId: string | undefined;
  photos: string[];
}

const NextArrow: React.FunctionComponent<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="text-slate-500 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <RiArrowRightSLine size={80} />
    </div>
  );
};

const PrevArrow: React.FunctionComponent<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="text-slate-500 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <RiArrowLeftSLine size={80} />
    </div>
  );
};

export default function Gallery({ propertyId, photos }: GalleryProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const photosList = usePhoto(propertyId, photos);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMiddlePhoto = () => {
    if (!photosList || photosList.length === 0) return '';
    const visibleSlides = windowWidth < 768 ? 3 : 5;
    const middleIndex = (activeSlide + Math.floor(visibleSlides / 2)) % photosList.length;
    return photosList[middleIndex];
  };

  const isMiddleSlide = (index: number) => {
    const visibleSlides = windowWidth < 768 ? 3 : 5;
    const middleIndex = (activeSlide + Math.floor(visibleSlides / 2)) % photosList.length;
    return index === middleIndex;
  };

  return (
    <section className="my-6">
      <div className="sm:h-72 md:h-96 lg:h-128">
        {photosList && (
          <img
            className="w-full h-full rounded-2xl"
            src={getMiddlePhoto()}
            alt="Displayed Photo"
          />
        )}
      </div>
      {photosList && photosList.length > 0 && (
        <Slider {...settings} className="mt-6">
          {photosList.map((photo, index) => (
            <Photo key={index} path={photo} className={isMiddleSlide(index) ? 'opacity-60' : ''} />
          ))}
        </Slider>
      )}
    </section>
  );
}
