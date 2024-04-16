import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Photo from "../components/Photo";
import rightArrow from "../assets/icons/rightArrow.svg";
import leftArrow from "../assets/icons/leftArrow.svg";

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface GalleryProps {
  propertyId: string | undefined;
  photos: string[];
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="text-slate-500 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
     <img alt="arrow icon" src={rightArrow} width={80} height={80} />
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="text-slate-500 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
        <img alt="arrow icon" src={leftArrow} width={80} height={80} />
    </div>
  );
}

export default function Gallery({ propertyId, photos }: GalleryProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMiddlePhoto = () => {
    if (!photos || photos.length === 0) return "";
    const visibleSlides = windowWidth < 768 ? 3 : 5;
    const middleIndex =
      (activeSlide + Math.floor(visibleSlides / 2)) % photos.length;
    return `${
      import.meta.env.VITE_API_URL
    }Photo?propertyId=${propertyId}&photoId=${photos[middleIndex]}`;
  };

  const isMiddleSlide = (index: number) => {
    const visibleSlides = windowWidth < 768 ? 3 : 5;
    const middleIndex =
      (activeSlide + Math.floor(visibleSlides / 2)) % photos.length;
    return index === middleIndex;
  };

  return (
    <section className="my-6">
      <div className="sm:h-72 md:h-96 lg:h-128">
        {photos && (
          <img
            className="w-full h-full rounded-2xl"
            src={getMiddlePhoto()}
            alt="Displayed Photo"
          />
        )}
      </div>
      {photos && photos.length > 0 && (
        <Slider {...settings} className="mt-6">
          {photos?.map((photo, i) => (
            <Photo
              key={i}
              path={`${
                import.meta.env.VITE_API_URL
              }Photo?propertyId=${propertyId}&photoId=${photo}`}
              className={isMiddleSlide(i) ? "opacity-60" : ""}
            ></Photo>
          ))}
        </Slider>
      )}
    </section>
  );
}
