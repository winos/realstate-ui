import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import annual_return from "/public/images/icons/annual-return.png";
import completed from "/public/images/icons/completed.png";
import investors from "/public/images/icons/investors.png";
import tower from "/public/images/tower.png";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio__overview__wrapper">
        <div className="container">
          <div className="portfolio__overview">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="portfolio__overview__single column__space">
                  <Image src={investors} alt="Investors" />
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
                  <Image src={annual_return} alt="Average Annual Return" />
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

      <section
        className="portfolio section__space bg__img over__hi"
        data-background="./assets/images/portfolio-bg.png"
      >
        <div className="container">
          <div className="portfolio__area">
            <div className="portfolio__inner section__space__top">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                  <div className="content column__space">
                    <h5 className="neutral-top">
                      Build a global real estate portfolio.
                    </h5>
                    <h2>Real Estate Investing For Everybody.</h2>
                    <p>
                      Investing with Revest, is similar to owning a rental
                      property, however with us you don&#39;t have to worry
                      about day-to-day property management and in the periods of
                      vacancy the borrower is required to distribute
                      fixed-interest payments.
                    </p>
                    <div className="port__cta__group">
                      <Link href="/property" className="button button--effect">
                        Start Exploring
                      </Link>
                      <Link
                        href="https://www.youtube.com/watch?v=LCihLrSehCo"
                        target="_blank"
                        className="button button--secondary button--effect video__popup"
                        rel="noreferrer"
                      >
                        <i>
                          <BsFillPlayFill />
                        </i>
                        How It Works
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="port__thumb thumb__ltr">
                    <Image src={tower} alt="Tower" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
