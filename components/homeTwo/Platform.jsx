import Image from "next/image";
import Link from "next/link";
import platformIllustration from "/public/images/overview/platform-illustration.png";

const Platform = () => {
  return (
    <section className="platform section__space pos__rel over__hi">
      <div className="container">
        <div className="platform__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <h5>We&#39;re Changing The Way You Invest</h5>
                <h2>
                  The Convenience You’d Expect from a Modern Investment Platform
                </h2>
                <p>
                  Invest and manage your portfolio through our easy-to-use
                  website and mobile app. Track your performance and watch as
                  properties across the country are acquired, improved, and
                  operated via dynamic asset updates.
                </p>
                <Link href="/property" className="button button--effect">
                  Start Exploring
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="platform__thumb thumb__ltr d-none d-lg-block">
                <Image src={platformIllustration} alt="platform Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
