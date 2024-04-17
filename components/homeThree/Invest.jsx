import Image from "next/image";
import cashout from "/public/images/icons/cashout.png";
import reinvest from "/public/images/icons/reinvest.png";
import secure from "/public/images/icons/secure.png";
import transparent from "/public/images/icons/transparent.png";

const Invest = () => {
  return (
    <section className="why__invest__two section__space">
      <div className="container">
        <div className="why__invest__two__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">Smarter Property Investing</h5>
            <h2>Why Invest in Real Estate?</h2>
            <p className="neutral-bottom">
              Start building your real estate investment portfolio today with as
              little as € 100.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <Image src={secure} alt="Secure Investment" />
                <h5>Secure Investment</h5>
                <p className="neutral-bottom">
                  Pellentesque molestie, quam ac porttitor venenatis ipsum .
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <Image src={transparent} alt="Transparent Platform" />
                <h5>Transparent Platform</h5>
                <p className="neutral-bottom">
                  Pellentesque molestie, quam ac porttitor venenatis ipsum .
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <Image src={cashout} alt="Cash out any time" />
                <h5>Cash out any time</h5>
                <p className="neutral-bottom">
                  Pellentesque molestie, quam ac porttitor venenatis ipsum .
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <Image src={reinvest} alt="Reinvest" />
                <h5>Reinvest</h5>
                <p className="neutral-bottom">
                  Pellentesque molestie, quam ac porttitor venenatis ipsum .
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
