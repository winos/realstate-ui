import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";
import { BsImages } from "react-icons/bs";
import InvestmentCard from "../cards/InvestmentCard";
import KeyUpdatesCard from "../cards/KeyUpdatesCard";
import ReportsCard from "../cards/ReportsCard";
import CountdownDisplay from "../common/CountdownDisplay";
import Social from "../social/Social";
import Loan from "./Loan";
import TermAndPayment from "./TermAndPayment";
import flag from "/public/images/icons/flag.png";

const Details = () => {
  return (
    <>
      <div className="property__details__banner business__details__bg bg__img clear__top"></div>
      <section className="p__details p__details__two faq section__space__bottom">
        <div className="container">
          <div className="p__details__area">
            <div className="row">
              <div className="col-lg-7">
                <div className="p__details__content">
                  <Link
                    href="/business-loan/{id}"
                    className="button button--effect button--secondary"
                  >
                    <BsImages /> Browse Gallery
                  </Link>
                  <div className="intro">
                    <h3>
                      How much will I earn if I <span>invest:</span>
                    </h3>
                  </div>
                  <div className="investment__amount__area">
                    {/* invest card here */}
                    <InvestmentCard />
                  </div>
                  <div className="group__one">
                    {/* loan section here */}
                    <Loan />
                  </div>
                  <div className="group__one">
                    <h4>Interest</h4>
                    <p>Annual interest rate</p>
                    <div className="tabular__group">
                      <div className="single">
                        <p>Investing from 100 €</p>
                        <p>Fixed interest 13 %</p>
                      </div>
                      <div className="single">
                        <p>Investing from 500 €</p>
                        <p>Fixed interest 13.25 %</p>
                      </div>
                      <div className="single">
                        <p>Investing from 1500 €</p>
                        <p>Fixed interest 13.5 %</p>
                      </div>
                      <div className="single">
                        <p>Investing from 2500 €</p>
                        <p>Fixed interest 14 %</p>
                      </div>
                    </div>
                    <p className="neutral-bottom">
                      The Interest on the Loan Amount shall be calculated from
                      and including the date of disbursement of the Loan Amount
                      to the Debtor&rsquo;s Account or to such other account (or
                      accounts) as notified by the Debtor to the Operator in
                      writing prior to the disbursement of the Loan Amount.
                    </p>
                  </div>
                  <div className="group__one">
                    {/* term And Payment */}
                    <TermAndPayment />
                  </div>
                  <div className="group__one">
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
                        <i className="fa-solid fa-clock"></i> Left to invest
                      </p>
                      <Countdown
                        date={Date.now() + 10000000000}
                        renderer={CountdownDisplay}
                      />
                    </div>
                    <h5>
                      Available for funding: <span>€134 514</span>
                    </h5>
                    <div className="progress__type progress__type--two">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="project__info">
                        <p className="project__has">
                          <span className="project__has__investors">
                            159 Investors
                          </span>{" "}
                          |{" "}
                          <span className="project__has__investors__amount">
                            $1,94,196
                          </span>
                        </p>
                        <p className="project__goal">$3,00,000 Goal</p>
                      </div>
                    </div>
                    <div className="ribbon">
                      <p>Business loan #00194</p>
                    </div>
                  </div>
                  <div className="group brin">
                    <div className="acus__content">
                      <form>
                        <div className="input input--secondary">
                          <label htmlFor="anNumTwo">Annual return rate:</label>
                          <input
                            type="number"
                            name="an__num__two"
                            id="anNumTwo"
                            placeholder="7.00%"
                            required="required"
                          />
                        </div>
                        <div className="input input--secondary">
                          <label htmlFor="anNumIn">Invest</label>
                          <input
                            type="number"
                            name="an__num_in"
                            id="anNumIn"
                            placeholder="€ 500"
                            required="required"
                          />
                        </div>
                        <div className="hab">
                          <div className="anti">
                            <p>Loan Period</p>
                            <div className="inti">
                              <p>24 mo.</p>
                            </div>
                          </div>
                          <div className="anti">
                            <p>Risk</p>
                            <div className="inti">
                              <p>C (Higher)</p>
                            </div>
                          </div>
                          <div className="anti">
                            <p>Purpose Of Loan</p>
                            <div className="inti">
                              <p>Business Loan</p>
                            </div>
                          </div>
                        </div>
                        <div className="collat">
                          <div className="single">
                            <p>Collateral</p>
                            <p>Guarantees/Surety</p>
                          </div>
                          <div className="single">
                            <p>Country</p>
                            <p>
                              <Image src={flag} alt="flag" />
                              Lithunia
                            </p>
                          </div>
                        </div>
                        <div className="suby">
                          <h5>500</h5>
                          <button
                            type="submit"
                            className="button button--effect"
                          >
                            Invest Now
                          </button>
                        </div>
                      </form>
                    </div>
                    <p className="text-center neutral-bottom">
                      <Link href="/contact-us">Request a free callback</Link>
                    </p>
                  </div>
                  <div className="group brini">
                    <h5 className="neutral-top">Investment Overview</h5>
                    <hr />
                    <p>
                      Purpose of the loan To increase the company&rsquo;s
                      working capital, magna a laoreet convallis, massa sapien
                      tempor arcu, nec euismod elit justo in lacus. Maecenas
                      mattis massa lectus, vel tincidunt augue porta non.
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
                      <Social />
                    </div>
                  </div>
                  <div className="group alt__brin">
                    {/* key update card */}
                    <KeyUpdatesCard />
                  </div>
                  <div className="group alt__brin__last">
                    {/* Report card  */}
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
