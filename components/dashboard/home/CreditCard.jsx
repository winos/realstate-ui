import { FaPlus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CreditCard = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // appendDots: (dots) => (
    //   <>
    //     <div className="slick-slider-dots">
    //       <ul>{dots}</ul>
    //     </div>
    //   </>
    // ),
  };
  return (
    <div className="card-tab-wrp" id="credit">
      <div className="card-tab-content">
        <button className="add-card">
          <i>
            <FaPlus className="fs-3" />
          </i>
        </button>
        <div className="card-content-slider-wrapper">
          <Slider {...settings} className="card-content-slider">
            {[...Array(4)].map((item, i) => (
              <div key={i} className="card-content-wrapper">
                <div className="card-content">
                  <p className="secondary card-no">Card No.</p>
                  <p>**** **** **** 4567</p>
                  <div className="group">
                    <div className="group-inner">
                      <p className="secondary">EXPIRY DATE </p>
                      <p className="secondary">09/24</p>
                    </div>
                    <div className="group-inner">
                      <p className="secondary">CURRENCY</p>
                      <p className="secondary">USD</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* <div className="slick-slider-dots"></div> */}
    </div>
  );
};

export default CreditCard;
