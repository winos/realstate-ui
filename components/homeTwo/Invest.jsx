import Image from "next/image";
import capital from "/public/images/icons/capital.png";
import diversifaction from "/public/images/icons/diversifaction.png";
import passive from "/public/images/icons/passive.png";
import protection from "/public/images/icons/protection.png";
import stable from "/public/images/icons/stable.png";
import tax from "/public/images/icons/tax.png";

const Invest = () => {
  return (
    <section className="why__invest section__space">
      <div className="container">
        <div className="why__invest__area wow fadeInUp">
          <div className="row d-flex align-items-center">
            <div className="col-xxl-6">
              <div className="content column__space--secondary">
                <h5 className="neutral-top">
                  Join the future of real estate investing
                </h5>
                <h2>Why Invest in Real Estate?</h2>
                <p>
                  Start building your real estate investment portfolio today
                  with as little as €100.
                </p>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="row">
                <div className="col-sm-6">
                  <div className="why__invest__single shadow__effect__secondary">
                    <Image src={passive} alt="Passive" />
                    <h5>Passive Income</h5>
                    <p className="neutral-bottom">
                      Earn income without active management
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="why__invest__single shadow__effect__secondary">
                    <Image src={stable} alt="Stable Cash Flow" />
                    <h5>Stable Cash Flow</h5>
                    <p className="neutral-bottom">
                      Rental payments provide steady cash flow through dividend
                      payouts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__single shadow__effect__secondary">
                <Image src={tax} alt="Tax Advantages" />
                <h5>Tax Advantages</h5>
                <p className="neutral-bottom">
                  There are numerous tax breaks and favorable deductions
                  associated
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__single shadow__effect__secondary">
                <Image src={capital} alt="Capital Appr'n" />
                <h5>Capital Appr&#39;n</h5>
                <p className="neutral-bottom">
                  Historically, real estate prices have increased over the rude
                  time
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__single shadow__effect__secondary">
                <Image src={protection} alt="Inflation protection" />
                <h5>Inflation protection</h5>
                <p className="neutral-bottom">
                  Home values and rents typically increase during times of
                  inflation
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__single shadow__effect__secondary">
                <Image src={diversifaction} alt="Diversification" />
                <h5>Diversification</h5>
                <p className="neutral-bottom">
                  Low correlation to other asset classNamees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invest;
