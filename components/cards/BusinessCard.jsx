import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock } from "react-icons/fa";
import CountdownDisplay from "../common/CountdownDisplay";

const BusinessCard = ({ singleData, colActiv }) => {
  const {
    name,
    title,
    totalInvest,
    investAmount,
    investPer,
    img,
    annualReturn,
    max_term,
    investLink,
  } = singleData;
  return (
    <div
      className={`${
        colActiv ? "col-12 alt__loan__list" : "col-md-6 col-xl-4"
      }  alt__loan__grid`}
    >
      <div className="alt__loan__grid__single">
        <div className="imi__alt">
          <div className="img__effect">
            <Link href={investLink}>
              <Image src={img} alt={name} />
            </Link>
            <div className="ribbon">
              <p>Waiting For Invest</p>
            </div>
          </div>
          <div className="alt__loan__content">
            <div className="item__head">
              <div className="item__head__left">
                <p>{name}</p>
                <h5>
                  <Link href={investLink}>{title}</Link>
                </h5>
              </div>
            </div>
            <div className="progress__type progress__type--three">
              <p className="collected">Collected Amount</p>
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
                  ${investAmount}
                </span>
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
                <p>Maximum Term</p>
                <h6>{max_term} Months</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="alt__loan__foot">
          <div className="invest__cta__wrapper">
            <div className="countdown__wrapper">
              <p className="secondary">
                <FaClock />
                Left to invest
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
              <p className="secondary">Business loan #00134</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
