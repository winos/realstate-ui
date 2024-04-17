import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper";

const ExploreSlider = ({ exploreData, prevRef, nextRef }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={24}
      modules={[Navigation, Autoplay]}
      //   autoplay={{
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      onInit={(sw) => {
        const swiper = sw;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      className="p-2"
    >
      {exploreData.map((singleItem) => (
        <SwiperSlide key={singleItem.id}>
          <div className="cities__single__item">
            <div className="img__box">
              <Image src={singleItem.img} alt={singleItem.name} />
            </div>
            <div>
              <h5>{singleItem.name}</h5>
              <p>{singleItem.propertys}+ Properties</p>
              <Link
                href="/property"
                className="button button--secondary button--effect"
              >
                Explore <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExploreSlider;
