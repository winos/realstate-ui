import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import logo from "/public/images/logo.png";

const AuthHeader = () => {
  return (
    <header className="header header--secondary">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src={logo} alt="Logo" />
          </Link>
          <div className="navbar__out order-2 order-xl-3">
            <div className="nav__group__btn">
              <Link href="/login" className="log d-none d-sm-block">
                Log In
              </Link>
              <Link
                href="/registration"
                className="button button--effect d-none d-sm-block"
              >
                Join Now
                <i className="fs-5">
                  <BsArrowRight className="text-white" />
                </i>
              </Link>
            </div>
            <button
              className="navbar-toggler d-block d-sm-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse order-3 order-xl-2"
            id="primaryNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item d-block d-sm-none">
                <Link href="/login" className="nav-link">
                  Log In
                </Link>
              </li>
              <li className="nav-item d-block d-sm-none">
                <Link
                  href="/registration"
                  className="button button--effect button--last"
                >
                  Join Now{" "}
                  <i className="fs-5">
                    <BsArrowRight className="text-white" />
                  </i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
