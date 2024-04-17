import Image from "next/image";
import Link from "next/link";
import arrow from "/public/images/arrow.png";
import marketIllustration from "/public/images/market-illustration.png";

const Market = () => {
  return (
    <section className="market section__space over__hi">
      <div className="container">
        <div className="market__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="market__thumb thumb__rtl column__space">
                <Image src={marketIllustration} alt="Explore the Market" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1">
              <div className="content">
                <h5 className="neutral-top">
                  Real exposure to the real estate market
                </h5>
                <h2>You Invest. Revest Does the Rest</h2>
                <p>
                  Transparent Real Estate Investing Through Revest.Join us and
                  experience a smarter,better way to invest in real estate
                </p>
                <Link href="/property" className="button button--effect">
                  Start Exploring
                </Link>
                <Image src={arrow} alt="Go to" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
