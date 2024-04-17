import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import one from "/public/images/one.png";
import three from "/public/images/three.png";
import two from "/public/images/two.png";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const GallerySlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "mx-0 mx-sm-4",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {[one, two, three, one, two, three].map((item, i) => (
          <div key={i} className="sick--gallery">
            <div className="gallery__single">
              <Image src={item} alt={item} className="w-100" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default GallerySlider;
