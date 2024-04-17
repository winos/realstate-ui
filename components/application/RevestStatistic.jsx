import { FaEuroSign } from "react-icons/fa";

const RevestStatistic = () => {
  return (
    <div className="investment__inner__area section__space__top wow fadeInUp">
      <div className="section__header">
        <h5 className="neutral-top">Revest Statistic</h5>
        <h2>Numbers Said More Than Words</h2>
        <p className="neutral-bottom">
          Businesses have been able to easily and quickly raise funds for the
          implementation of real estate projects, business start-ups or its
          development.
        </p>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <div className="invest__single">
            <h4 className="neutral-top ">
              <span className="counterThree">23875805</span>
              <FaEuroSign />
            </h4>
            <p className="neutral-bottom">Money lent</p>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="invest__single">
            <h4 className="neutral-top">
              <span className="counterThree">74660</span>
              <FaEuroSign />
            </h4>
            <p className="neutral-bottom">Average loan size</p>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="invest__single">
            <h4 className="neutral-top counterThree">327</h4>
            <p className="neutral-bottom">Funded Loans</p>
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="invest__single">
            <h4 className="neutral-top">
              <span className="counterThree">12</span> Mo.
            </h4>
            <p className="neutral-bottom">Average Loan Term</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevestStatistic;
