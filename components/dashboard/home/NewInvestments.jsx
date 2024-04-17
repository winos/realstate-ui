import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import san_two from "/public/images/san-two.png";

const NewInvestments = () => {
  return (
    <div className="dashboard-single__box">
      <div className="intro">
        <h5>New Investments</h5>
        <Link href="#">
          Show All
          <BsArrowRight />
        </Link>
      </div>
      {[...Array(3)].map((item, i) => (
        <div key={i} className="new-invest">
          <div className="poster">
            <Link href="#">
              <Image src={san_two} alt="San Francisco" />
            </Link>
          </div>
          <div className="invest-content">
            <div className="item__head__left">
              <h6>Los Angeles</h6>
              <div className="progress__type progress__type--two">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="project__info">
                  <p className="project__has">
                    <span className="project__has__investors">
                      119 Investors
                    </span>{" "}
                    |{" "}
                    <span className="project__has__investors__amount">
                      $4,94,196
                    </span>{" "}
                    <span className="project__has__investors__percent">
                      (54.73%)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewInvestments;
