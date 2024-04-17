import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { FaClock, FaImages, FaMapMarkerAlt } from "react-icons/fa";
import faqData from "../../data/faqData";
import KeyUpdatesCard from "../cards/KeyUpdatesCard";
import ReportsCard from "../cards/ReportsCard";
import TermSingleCard from "../cards/TermSingleCard";
import CountdownDisplay from "../common/CountdownDisplay";
import SingleFaq from "../common/SingleFaq";
import Social from "../social/Social";
import Funding from "./Funding";
import InvestForm from "./InvestForm";
import check from "/public/images/check.png";
import charge from "/public/images/icons/charge.png";
import investor from "/public/images/icons/investor.png";
import loan from "/public/images/icons/loan.png";
import project from "/public/images/icons/project.png";
import reinvest from "/public/images/icons/reinvest.png";
import owner from "/public/images/owner.png";

const Details = () => {
  return (
    <>
      <div className="property__details__banner property__details__bg bg__img clear__top"></div>
      <section className="p__details faq section__space__bottom">
        <div className="container">
          <div className="p__details__area">
            <div className="row">
              <div className="col-lg-7">
                <div className="p__details__content">
                  <Link
                    href="/property/{id}"
                    className="button button--effect button--secondary"
                  >
                    <FaImages />
                    Browse Gallery
                  </Link>
                  <div className="intro">
                    <h3>Los Angeles</h3>
                    <p className="d-flex align-items-center gap-1">
                      <FaMapMarkerAlt />
                      8706 Herrick Ave, Los Angeles
                    </p>
                  </div>
                  <div className="group__one">
                    <h4>Project Description</h4>
                    <p>
                      The “Revest“ team is introducing a new buy to let
                      investment opportunity: A19, Vilnius I. The invest ment
                      offer consists of administrative premises, which are
                      currently being converted into studio apartments/lofts. In
                      this way, the aim is to increase the rental income of this
                      real estate project.
                    </p>
                  </div>
                  <div className="group__two">
                    <h5>Reasons to invest in the project A19, Vilnius:</h5>
                    <ul>
                      {[
                        "Lofts in an attractive area - in the center of Vilnius;",
                        "ixed, attractive annual rental income;",
                        "The fixed interest is indexed to inflation;",
                        "The fixed interest is indexed to inflation;",
                        "Variable capital gains;",
                        "The premises were appraised by an independent valuer at 347 000 EUR",
                        "The project owner is an experienced real estate administrator.",
                      ].map((item, i) => (
                        <li key={i}>
                          <Image src={check} alt="Check" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="terms">
                    <h5>Financial terms of the investment:</h5>
                    <div className="terms__wrapper">
                      <TermSingleCard
                        img={loan}
                        p="Maximum loan term"
                        heading="36 Months"
                      />
                      <TermSingleCard
                        img={charge}
                        p="Security"
                        heading="1st charge Mortgage"
                      />
                      <TermSingleCard
                        img={project}
                        p="Annual Return"
                        heading="7%"
                      />
                    </div>
                  </div>
                  <div className="group__two">
                    <h5>When investing:</h5>
                    <ul>
                      <li>
                        <Image src={check} alt="Check" /> Up to 4999 € - the
                        annual return is 7%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 5000 € – 14999 € - the
                        annual return is 7.1%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 15000 € – 29999 € -
                        the annual return is 7.2%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 30000 € – 49999 € -
                        the annual return is 7.35%.
                      </li>
                      <li>
                        <Image src={check} alt="Check" /> 50000 € and more - the
                        annual return is 7.5%.
                      </li>
                    </ul>
                  </div>
                  <div className="terms">
                    <h5>The capital growth distribution:</h5>
                    <div className="terms__wrapper">
                      <TermSingleCard
                        img={investor}
                        p="Investors"
                        heading="40% - 60%"
                      />
                      <TermSingleCard img={project} p="Project" heading="40%" />
                      <TermSingleCard
                        img={reinvest}
                        p="Revest"
                        heading="Up to 20%"
                      />
                    </div>
                  </div>
                  <div className="owner">
                    <Image src={owner} alt="owner" />
                    <div>
                      <h5>The project owner (borrower)</h5>
                      <p>
                        MB „Rego Properties“ - is a company serving as a special
                        vehicle for revest investments. The CEO of the company -
                        Andrius Rimdeika is a former investment banker, who has
                        worked in investment firms such as ”Morgan Stanley” and
                        “Prime investment”.
                      </p>
                    </div>
                  </div>
                  <div className="faq__group">
                    <h5 className="atr">Frequently asked questions</h5>
                    <div className="accordion" id="accordionExampleFund">
                      {faqData.map((item, i) => (
                        <SingleFaq key={item.id} i={i} item={item} />
                      ))}
                    </div>
                  </div>
                  <div className="group__one">
                    <h4>Key investment risks:</h4>
                    <p>
                      Risk of falling prices: The price of the property might
                      fall due to the increase in supply or decrease in demand
                      in the area or other economic factors.Liquidity risk: The
                      borrower might be unable to find a buyer in order to sell
                      the property.Tenant risk: There is a risk that the asset
                      can lose a tenant and it can take time to find
                      replacements, which can have impact on the property&#39;s
                      cash-flow.
                    </p>
                    <div className="map__wrapper">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                        width="746"
                        height="312"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p__details__sidebar">
                  <div className="intro">
                    <div className="countdown__wrapper">
                      <p className="secondary">
                        <FaClock /> Left to invest
                      </p>
                      <Countdown
                        date={Date.now() + 10000000000}
                        renderer={CountdownDisplay}
                      />
                    </div>
                    <h5>
                      Available for funding: <span>€134 514</span>
                    </h5>
                    {/* funding  */}
                    <Funding />
                  </div>
                  <div className="group brin">
                    <h5 className="neutral-top">Occupancy</h5>
                    <div className="acus__btns">
                      {[0, 20, 40, 60, 80, 100].map((item, i) => (
                        <Link
                          key={item}
                          href="/"
                          className="acus__btn acus__btn__active"
                        >
                          {item}%
                        </Link>
                      ))}
                    </div>
                    <div className="acus__content">
                      {/* Invest Form  */}
                      <InvestForm />
                    </div>
                    <p className="text-center neutral-bottom">
                      <Link href="/contact-us">Request a free callback</Link>
                    </p>
                  </div>
                  <div className="group brini">
                    <h5 className="neutral-top">Investment Overview</h5>
                    <hr />
                    <p>
                      Purpose of the loan To increase the company&#39;s working
                      capital, magna a laoreet convallis, massa sapien tempor
                      arcu, nec euismod elit justo in lacus. Maecenas mattis
                      massa lectus, vel tincidunt augue porta non.
                    </p>
                    <p>
                      Duis quis orci vehicula, fermentum tortor vitae, imperdiet
                      sem. Quisque iaculis eu odio in lobortis. Sed vel ex non
                      erat pellentesque lobortis vel vitae diam. Donec gravida
                      eleifend pellentesque. Curabitur dictum blandit accumsan.
                    </p>
                    <Link href="/blog">Read More</Link>
                  </div>
                  <div className="group birinit">
                    <h6>Share via Social </h6>
                    <div className="social text-start">
                      {/* social icon */}
                      <Social />
                    </div>
                  </div>
                  <div className="group alt__brin">
                    {/* key update card */}
                    <KeyUpdatesCard />
                  </div>
                  <div className="group alt__brin__last">
                    {/* reaport card */}
                    <ReportsCard />
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

export default Details;
