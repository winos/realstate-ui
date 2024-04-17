import Image from "next/image";
import Link from "next/link";
import arrow from "/public/images/arrow.png";
import focus from "/public/images/icons/focus.png";
import gain from "/public/images/icons/gain.png";
import noticed from "/public/images/icons/noticed.png";
import marketTwoIllustration from "/public/images/market-two-illustration.png";

const Market = () => {
  return (
    <section className="market market--two market--three section__space__bottom">
      <div className="container">
        <div className="market__area market__area--two section__space bg__img">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <h5 className="neutral-top">
                  Real exposure to the real estate market
                </h5>
                <h2>You Invest. Revest Does the Rest</h2>
                <p>
                  Transparent Real Estate Investing Through Revest.Join us and
                  experience a smarter,better way to invest in real estate
                </p>
                <Link href="" className="button button--effect">
                  Start Exploring
                </Link>
                <Image src={arrow} alt="Go to" />
              </div>
            </div>
          </div>
          <Image
            src={marketTwoIllustration}
            alt="Explore the Market"
            className="d-none d-lg-block market__two__thumb"
          />
        </div>
        <div className="market__features">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="market__features__single shadow__effect__secondary">
                <Image src={gain} alt="Gain Instant" />
                <h4>Gain Instant</h4>
                <p className="neutral-bottom">
                  Revest performs deep due diligence on sponsors, giving
                  investors peace of mind.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="market__features__single market__features__single--alt shadow__effect">
                <Image src={noticed} alt="Get noticed" />
                <h4>Get Noticed</h4>
                <p className="neutral-bottom">
                  REVEST VERIFIED sponsor profiles are available to accredited
                  real estate investment investors.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="market__features__single shadow__effect__secondary">
                <Image src={focus} alt="Focus on Deals" />
                <h4>FOCUS ON DEALS</h4>
                <p className="neutral-bottom">
                  Spend less time smiling, reaserching and dialing and more time
                  doing what you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
