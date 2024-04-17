import Image from "next/image";
import Link from "next/link";
import heroIllustration from "/public/images/hero/hero-illustration.png";

const Hero = () => {
  return (
    <section className="hero hero__bg pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-6 col-xxl-5">
              <div className="hero__content">
                <h5 className="neutral-top">A smarter, better way to invest</h5>
                <h1>
                  Real Estate Investment For <span>Everyone</span>{" "}
                </h1>
                <p className="primary neutral-bottom">
                  Buy shares of rental properties, earn monthly income, and
                  watch your money grow
                </p>
                <div className="hero__cta__group">
                  <Link href="/property" className="button button--effect">
                    Start Exploring
                  </Link>
                  <Link
                    href="/business-loan"
                    className="button button--secondary button--effect"
                  >
                    Get Funding
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-6 offset-xxl-1">
              <div className="hero__illustration d-none d-lg-block">
                <Image
                  src={heroIllustration}
                  alt="heroIllustration"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
