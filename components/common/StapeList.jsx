import Image from "next/image";
import browse from "/public/images/step/browse.png";
import earn from "/public/images/step/earn.png";
import invest from "/public/images/step/invest.png";

const StapeList = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <div className="img__box">
            <Image src={browse} alt="Browse Properties" />
            <div className="step__count">
              <h4>01</h4>
            </div>
          </div>
          <h4>Browse Properties</h4>
          <p className="neutral-bottom">
            Select a property that fits your goal from our huge variety of
            hand-picked properties.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item column__space--secondary">
          <div className="img__box arrow__container">
            <Image src={invest} alt="View Details & Invest" />
            <div className="step__count">
              <h4>02</h4>
            </div>
          </div>
          <h4>View Details & Invest</h4>
          <p className="neutral-bottom">
            View detailed metrics for that property like Rental Yield, etc. and
            invest like institutions.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-xl-4">
        <div className="start__single__item">
          <div className="img__box">
            <Image src={earn} alt="Earn and Track" />
            <div className="step__count">
              <h4>03</h4>
            </div>
          </div>
          <h4>Earn and Track</h4>
          <p className="neutral-bottom">
            You have full visibility into the performance of your investment.
            Track your total current.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StapeList;
