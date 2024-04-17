import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero hero--two hero--three hero--three__bg clear__top pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero__content">
                <h5 className="neutral-top">
                  Smart & Secure Real Estate Investment Platform
                </h5>
                <h1>Invest in the future of real estate</h1>
                <p className="primary neutral-bottom">
                  Start earning monthly rental income and capital growth with
                  our property-backed investments
                </p>
                <div className="hero__cta__group">
                  <Link
                    href="/business-loan"
                    className="button button--secondary button--effect"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
