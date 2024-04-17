import Image from "next/image";
import Link from "next/link";
import attractive from "/public/images/icons/attractive.png";
import fast from "/public/images/icons/fast.png";
import innovation from "/public/images/icons/innovation.png";

const Numbers = () => {
  return (
    <section className="numbers numbers__two section__space__bottom">
      <div className="container">
        <div className="numbers__area wow fadeInUp">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content column__space">
                <h5 className="neutral-top">Your success is our success.</h5>
                <h2>Why sell through Revest?</h2>
                <p>
                  Revest enables real estate owners to sell their properties
                  through its platform. Submit your property quickly and easily!
                </p>

                <p>
                  <Link href="/contact-us">
                    Let us know about your property
                  </Link>
                </p>
                <Link href="/login" className="button button--effect">
                  Submit Your Property
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row d-flex align-items-start align-items-lg-center">
                <div className="col-sm-6">
                  <div className="numbers__single shadow__effect">
                    <Image src={attractive} alt="Attractive" />
                    <h5>Attractive conditions</h5>
                    <p className="neutral-bottom">
                      With us you sell your property without paying a brokerage
                      commission.
                    </p>
                  </div>
                  <div className="numbers__single shadow__effect">
                    <Image src={fast} alt="Fast" />
                    <h5>Fast processing</h5>
                    <p className="neutral-bottom">
                      Receive an initial offer and a property assessment within
                      48 hours.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="numbers__single alt shadow__effect">
                    <Image src={innovation} alt="Innovation" />
                    <h5>Innovation</h5>
                    <p className="neutral-bottom">
                      Sell your property online through an innovative business
                      model.
                    </p>
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

export default Numbers;
