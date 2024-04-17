import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { navData } from "./navData";
import logo from "/public/images/logo.png";

const NavBar = () => {
  const [toggleActive, setToggleActive] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  return (
    <header
      className={`header ${
        // windowHeight > 0 && "header--secondary header__active"
        windowHeight > 0 && "header__active"
      } `}
    >
      <nav
        className={`navbar navbar-expand-xl ${
          toggleActive ? "navbar__active" : ""
        }`}
      >
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image className="logo" src={logo} alt="logo" loading="lazy" />
          </Link>
          <div className="navbar__out order-2 order-xl-3">
            <div className="nav__group__btn">
              <Link href="/login" className="log d-none d-sm-block">
                Log In
              </Link>

              <Link
                href="/registration"
                className="button button--effect d-none d-sm-inline-flex"
              >
                Join Now
                <HiArrowNarrowRight className="fs-4" />
              </Link>
            </div>
            <button
              className={`navbar-toggler ${
                toggleActive ? "toggle-active" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
              onClick={() => setToggleActive(!toggleActive)}
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
          <div
            className={`collapse navbar-collapse order-3 order-xl-2 ${
              toggleActive ? "show" : ""
            }`}
            id="primaryNav"
          >
            <ul className="navbar-nav">
              {navData.map(({ itm, url, id, dropdown, dropdown_itms }) => {
                return dropdown ? (
                  <li key={id} className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href={url}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {itm}
                    </Link>
                    <ul className="dropdown-menu">
                      {dropdown_itms?.map(({ id, dp_itm, url }) => (
                        <li key={id}>
                          <Link
                            href={url}
                            className="dropdown-item"
                            onClick={() => setToggleActive(false)}
                          >
                            {dp_itm}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={id} className="nav-item">
                    <Link
                      href={url}
                      className="nav-link"
                      onClick={() => setToggleActive(false)}
                    >
                      {itm}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
