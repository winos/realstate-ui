import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ExploreSlider from "../sliders/ExploreSlider";
import exploreData from "./exploreData";

const Explore = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="cities section__space">
      <div className="container">
        <div className="cities__area">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>
                  Explore By <span>Cities</span>
                </h2>
              </div>
              <div className="col-lg-4">
                <div className="custom__slide__btn">
                  <button
                    type="button"
                    className="button button--effect prev"
                    ref={prevRef}
                  >
                    <BsArrowLeft className="fs-5" />
                  </button>
                  <button
                    type="button"
                    className="button button--effect next"
                    ref={nextRef}
                  >
                    <BsArrowRight className="fs-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cities__item__wrapper">
            {/* Explore Slider */}
            <ExploreSlider
              exploreData={exploreData}
              prevRef={prevRef}
              nextRef={nextRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
