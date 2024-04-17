import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import CountdownDisplay from "../common/CountdownDisplay";

const ProductCard = ({ singleItem }) => {
  const {
    city,
    location,
    totalInvest,
    investAmount,
    investPer,
    img,
    annualReturn,
    type,
    investLink,
  } = singleItem;
  return (
    <div className="property__grid__single">
      <div className="img__effect">
        <Link href={investLink}>
          <Image src={img} alt={city} />
        </Link>
      </div>
      <div className="property__grid__single__inner">
        <h4>{city}</h4>
        <p className="sub__info d-flex align-items-center gap-1">
          <FaMapMarkerAlt /> {location}
        </p>
        <div className="progress__type">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p className="project__has">
            <span className="project__has__investors">
              {totalInvest} Investors
            </span>{" "}
            |{" "}
            <span className="project__has__investors__amount">
              $ {investAmount}
            </span>{" "}
            <span className="project__has__investors__percent">
              ({investPer}%)
            </span>
          </p>
        </div>
        <div className="item__info">
          <div className="item__info__single">
            <p>Annual Return</p>
            <h6>
              {annualReturn.regular}% + {annualReturn.bonus}%
            </h6>
          </div>
          <div className="item__info__single">
            <p>Property Type</p>
            <h6>{type}</h6>
          </div>
        </div>
        <div className="invest__cta__wrapper">
          <div className="countdown__wrapper">
            <p className="secondary d-flex align-items-center gap-1">
              <FaClock /> Left to invest
            </p>
            <Countdown
              date={Date.now() + 10000000000}
              renderer={CountdownDisplay}
            />
          </div>
          <div className="invest__cta">
            <Link href={investLink} className="button button--effect">
              Invest Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
