import Image from "next/image";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import Social from "../social/Social";
import footerHomeIllustration from "/public/images/footer/footer__home___illustration.png";
import footerLeftCircle from "/public/images/footer/footer__left__circle.png";
import footerRightCircle from "/public/images/footer/footer__right__circle.png";
import logoLight from "/public/images/logo-light.png";

const Footer = () => {
  return (
    <footer className="footer pos__rel over__hi">
      <div className="container">
        <div className="footer__newsletter">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="footer__newsletter__content column__space">
                <h3>Subscribe for updates</h3>
                <p>
                  Stay on top of the latest blog posts, news and announcements
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5 offset-xxl-1">
              <div className="footer__newsletter__form">
                <form>
                  <div className="footer__newsletter__input__group">
                    <div className="input">
                      <input
                        type="email"
                        name="news__letter"
                        id="newsLetterMail"
                        placeholder="Enter Your Email"
                        required="required"
                      />
                    </div>
                    <button type="submit" className="button button--effect">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__area section__space">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="footer__intro">
                <Link href="/">
                  <Image src={logoLight} alt="logoLight" />
                </Link>
                <p>
                  Revest is a platform offering anyone the ability to invest and
                  potentially earn money from property at the click of a button
                </p>
                <div className="social">
                  {/* Social icon here */}
                  <Social />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Company</h5>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
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
                    <Link href="/property">Browse Properties</Link>
                  </li>
                  <li>
                    <Link href="/how-it-works">How it works</Link>
                  </li>
                  <li>
                    <Link href="/business-loan/application">
                      Loan Application{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/property/alert">Property Alerts</Link>
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
            <div className="col-sm-9 order-1 order-sm-0">
              <div className="footer__copyright">
                <p>
                  Copyright &copy; Revest | Designed by{" "}
                  <Link href="https://themeforest.net/user/pixelaxis">
                    Pixelaxis
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer__language">
                <FaGlobe className="text-white fs-5" />
                <select className="language-select">
                  <option value="english">En</option>
                  <option value="australia">Aus</option>
                  <option value="brazil">Bra</option>
                  <option value="argentina">Arg</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__animation">
        <Image
          className="left__circle"
          src={footerLeftCircle}
          alt="footer__left__circle"
        />
        <Image
          className="right__circle"
          src={footerRightCircle}
          alt="footer__right__circle"
        />
        <Image
          className="home__illustration"
          src={footerHomeIllustration}
          alt="footer__home___illustration"
        />
      </div>
    </footer>
  );
};

export default Footer;
