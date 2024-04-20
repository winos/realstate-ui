import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";
import account from "/public/images/icons/account.png";
import calendar from "/public/images/icons/calendar.png";
import dashboard from "/public/images/icons/dashboard.png";
import investments from "/public/images/icons/investments.png";
import logout from "/public/images/icons/logout.png";
import transactions from "/public/images/icons/transactions.png";
import withdraw from "/public/images/icons/withdraw.png";

const LeftSideMenu = ({ activSidebar, setActivSidebar }) => {
  // const [activSidebar, setActivSidebar] = useState(false);
  const router = useRouter();

  return (
    <div className="col-xxl-3">
      <div className={`sidebar ${activSidebar && "sidebar__active"}`}>
        <button
          type="button"
          className="close__sidebar bg-transparent"
          onClick={() => setActivSidebar(false)}
        >
          <i>
            <FaTimes />
          </i>
        </button>
        <div className="sidenav__wrapper">
          <ul>
            {[
              ["Dashboard", "/dashboard", dashboard],
              ["Investments", "/dashboard/investments", investments],
              ["Transactions", "/dashboard/transaction", transactions],
              ["Withdraw", "/dashboard/withdraw", withdraw],
              ["Account", "/dashboard/account", account],
              ["Property", "/dashboard/property", account],
            ].map(([item, url, icon], i) => (
              <li key={item}>
                <Link
                  href={url}
                  className={`${router.pathname === url && "sidenav__active"}`}
                  onClick={() => setActivSidebar(false)}
                >
                  <Image src={icon} alt="Withdraw" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <ul className="logout">
            <li>
              <Link href="/login">
                <Image src={logout} alt="Logout" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidenav__wrapper sidenav__footer">
          <h6>Last Login</h6>
          <hr />
          <div className="sidenav__time">
            <p className="secondary">
              <Image src={calendar} alt="calendar" />
              02.01.2022
            </p>
            <p className="secondary">15:48:13</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenu;
