import Image from "next/image";
import Social from "../social/Social";
import avatar from "/public/images/blog/avatar.png";
import calendar from "/public/images/blog/calendar.png";
import singlePoster from "/public/images/blog/single-poster.png";
import watch from "/public/images/blog/watch.png";

const Header = () => {
  return (
    <>
      <div className="blog__single__banner clear__top bg__img"></div>
      <section className="blog__single__post">
        <div className="container">
          <div className="blog__single__post__content">
            <div className="blog__details__head">
              <div className="blog__item__info">
                <div className="post__date">
                  <div className="dat">
                    <Image src={calendar} alt="Post Date" />
                    <p>December 17, 2022</p>
                  </div>
                </div>
                <div className="post__read__time">
                  <div className="dat">
                    <Image src={watch} alt="Post Read Time" />
                    <p>7 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="blog__social">
                <div className="social text-start text-lg-end">
                  <Social />
                </div>
              </div>
            </div>
            <h2>Eight Tips For Launching Your Real Estate Investing Career</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              at lectus congue erat venenatis volutpat. Aenean mollis nunc at
              felis imperdiet finibus. Quisque porttitor, augue ac euismod
              lacinia, leo mauris lacinia libero, eget accumsan ipsum diam sit
              amet neque.
            </p>
            <div className="group">
              <h4>
                Real Estate Investment Loan - Invest Through Low Cost Funds
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
              <ol>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum available
                </li>
                <li>
                  Many desktop publishing packages and web page editors now use
                  Lorem.
                </li>
              </ol>
            </div>
            <div className="poster">
              <Image src={singlePoster} alt="Poster" />
            </div>
            <div className="group">
              <h4>How to Make Better Real Estate Invest.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
              <ol>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum available
                </li>
                <li>
                  Many desktop publishing packages and web page editors now use
                  Lorem.
                </li>
              </ol>
            </div>
            <div className="group">
              <h4>
                Why Real Estate Investment Makes Better Sense Than Investing in
                Stocks
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
              <div className="quot">
                <blockquote className="tertiary neutral-top neutral-bottom">
                  “Nisi quis eleifend quam adipiscing vitae aliquet bibendum
                  enim facilisis gravida neque velit euismod in pellentesque
                  massa placerat”
                </blockquote>
              </div>
            </div>
            <div className="group">
              <h4>HYIP Investments - Right Way to Earn a Million</h4>
              <p className="neutral-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
            </div>
          </div>
          <div className="section__space">
            <div className="blog__post__author bg__img">
              <Image src={avatar} alt="Avatar" />
              <div>
                <h4>Fannie Simon</h4>
                <p className="cta__space">Joined Spoment on Dec 17, 2021</p>
                <div className="social text-start">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
