import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import logo from "/public/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer dashboard-footer pos__rel over__hi">
      <div className="container">
        <div className="footer__area section__space">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="footer__intro">
                <Link href="/">
                <Image src={logo} alt="Logo" className="logo-max-height" />
                </Link>
                <p>
                  <i className="fa-solid fa-location-dot"></i>1134 W Hubbard St.
                  Floor 3, Chicago, IL, 60642, USA
                </p>
                <p>
                  <i className="fa-solid fa-phone"></i>(814) 277-4833
                </p>
                <p>
                  <i className="fa-solid fa-envelope"></i>support@revest.com
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/career">Careers</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/affiliate-program">Affiliate</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Invest</h5>
                <ul>
                  <li>
                    <Link href="/properties">Browse Properties</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How it works</Link>
                  </li>
                  <li>
                    <Link href="/loan-application">Loan Application </Link>
                  </li>
                  <li>
                    <Link href="/property-alert">Property Alerts</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/support">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt--two">
                <h5>Insights</h5>
                <ul>
                  <li>
                    <Link href="/support">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/list-your-property">List Your Property</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/loyality-program">Loyality program </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Term & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy">Cookie Policy</Link>
                  </li>
                  <li className="neutral-bottom">
                    <Link href="/key-risks">Key Risks</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__credit">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div className="footer__copyright">
                <p>
                  Copyright &copy; Revest | Designed by{" "}
                  <Link href="https://themeforest.net/user/pixelaxis">
                    Pixelaxis
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="social">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
