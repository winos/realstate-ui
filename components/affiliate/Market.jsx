import Image from "next/image";
import Link from "next/link";
import affiliateIllustration from "/public/images/affiliate-illustration.png";

const Market = () => {
  return (
    <section className="market market__two section__space over__hi">
      <div className="container">
        <div className="market__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="market__thumb thumb__rtl column__space d-none d-lg-block">
                <Image src={affiliateIllustration} alt="Affiliate Program" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1">
              <div className="content">
                <h5 className="neutral-top">Earn Money</h5>
                <h2>Affiliate Program</h2>
                <p>
                  Earn commission from every revest new user you help to
                  bring.Join our affiliate program, refer your audience, and
                  earn revenue.
                </p>
                <Link href="" className="button button--effect">
                  Join As a Affiliate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
