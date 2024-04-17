import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

import avatar from "/public/images/testimonial/avatar.png";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      className="slick-next arrow--button"
      onClick={onClick}
    >
      Next Btn
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      className="slick-prev arrow--button"
      onClick={onClick}
    >
      Next Btn
    </button>
  );
}

const TestimonialSlider = ({ cls }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      // className={`testimonial testimonial__bg section__space pos__rel over__hi bg__img ${cls}`}
      className={`testimonial testimonial__bg section__space pos__rel over__hi bg__img ${cls}`}
    >
      <div className="container">
        <div className="testimonial__area">
          <div className="section__header">
            <h5 className="neutral-top ">Investors Trust Us</h5>
            <h2>Trusted by Over 40,000 Worldwide Customer since 2022</h2>
            <p className="neutral-bottom">
              We divide each property into shares so anyone can get started.
              Kindly check out our Investors say about revest.
            </p>
          </div>
          <Slider {...settings} className="testimonial__item__wrapper">
            {[...Array(4)].map((item, i) => (
              <div key={i} className="testimonial__support">
                <div className="testimonial__item bg__img">
                  <div className="testimonial__author__ratings">
                    {[...Array(5)].map((ite, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="tertiary">
                    Very trustworthy and clearly platform to invest in real
                    state. Safe investment with monthly payouts. Really
                    recommended!
                  </p>
                  <div className="testimonial__author">
                    <div className="testimonial__author__info">
                      <div className="avatar__wrapper">
                        <Image src={avatar} alt="avatar" />
                      </div>
                      <div>
                        <h5>Allan Murphy</h5>
                        <p className="neutral-bottom">United States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
