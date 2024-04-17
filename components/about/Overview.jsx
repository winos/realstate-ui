import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import aboutVideoIllustration from "/public/images/about-video-illustration.png";
import annualReturn from "/public/images/icons/annual-return.png";
import completed from "/public/images/icons/completed.png";
import Investors from "/public/images/icons/investors.png";

const Overview = () => {
  return (
    <section className="about__overview">
      <div className="video video--secondary">
        <div className="container">
          <div className="video__area">
            <Image
              src={aboutVideoIllustration}
              alt="about Video illustration"
            />
            <div className="video__btn">
              <Link
                className="video__popup"
                href="https://www.youtube.com/watch?v=LCihLrSehCo"
                title="YouTube video player"
                target={"_blank"}
              >
                <FaPlay />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about__overview__area">
          <div className="section__header">
            <h5 className="neutral-top">
              Investing in real estate is now easier than buying stocks
            </h5>
            <h2>
              Make property Investing in simple, accessible and transparent
            </h2>
            <p className="neutral-bottom">
              Our mission is to empower the world to build wealth through modern
              real estate investing.
            </p>
          </div>
          <div className="portfolio__overview">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="portfolio__overview__single column__space">
                  <Image src={Investors} alt="Investors" />
                  <div>
                    <h2 className="counterTwo">6738</h2>
                    <p>Investors</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="portfolio__overview__single column__space">
                  <Image src={completed} alt="completed" />
                  <div>
                    <h2 className="counterTwo">61316</h2>
                    <p>Investments Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="portfolio__overview__single">
                  <Image src={annualReturn} alt="Average Annual Return" />
                  <div>
                    <h2>
                      <span className="counterTwo">10.36</span>%
                    </h2>
                    <p>Average Annual Return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
