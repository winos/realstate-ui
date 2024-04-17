import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBell } from "react-icons/fa";
import direction from "/public/images/direction.png";
import logo from "/public/images/logo.png";
import profile from "/public/images/profile.png";

const Header = () => {
  const [activeNotification, setActiveNotification] = useState(false);
  return (
    <header className="dashboard-header">
      <div className="container">
        <div className="dashboard-header__area">
          <Link href="/" className="header-logo">
            <Image src={logo} alt="logo" className="logo" />
          </Link>
          <div className="dashboard-header__area-content">
            <Link className="button button--effect" href="/investment">
              <Image src={direction} alt="direction" />
              New Investments
            </Link>
            <div className="notification-area">
              <button
                type="button"
                className="icon__wrapper notification__icon bg-transparent"
                onClick={() => setActiveNotification(!activeNotification)}
              >
                <i>
                  <FaBell />
                </i>
                <span>03</span>
              </button>
              <div
                className={`notification__wrapper ${
                  activeNotification && "visible opacity-100"
                }`}
              >
                <div className="notification__head">
                  <p className="text-center">3 New</p>
                  <p className="text-center">Notification</p>
                </div>
                <div className="notification__single-wrapper">
                  <div className="notification__single">
                    <Link href="#">
                      <h6>Welcome to spoment</h6>
                      <p>
                        We are happy to welcome you to our community spoment.
                      </p>
                    </Link>
                    <p className="time">2 hours ago</p>
                  </div>
                  <div className="notification__single">
                    <Link href="#">
                      <h6>Welcome to spoment</h6>
                      <p>
                        We are happy to welcome you to our community spoment.
                      </p>
                    </Link>
                    <p className="time">2 hours ago</p>
                  </div>
                </div>

                <div className="mark__read">
                  <Link href="#">Mark all as read</Link>
                </div>
              </div>
            </div>
            <div className="dashboard-language select">
              <select className="select-dashboard-language fw-semibold">
                <option value="english">En</option>
                <option value="australia">Aus</option>
                <option value="germany">GER</option>
                <option value="argentina">Arg</option>
              </select>
            </div>
            <Link href="/dashboard/account" className="profile">
              <Image src={profile} alt="Profile" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
