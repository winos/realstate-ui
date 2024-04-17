import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  Billing,
  CollapseSidebar,
  General,
  LeftSideMenu,
  Security,
} from "../index";

const AccountBody = () => {
  const [tabItem, setTabItem] = useState("general");
  const [activSidebar, setActivSidebar] = useState(false);
  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
            {/* @TODO: left sidebar */}
            <LeftSideMenu
              activSidebar={activSidebar}
              setActivSidebar={setActivSidebar}
            />

            <div className="col-xxl-9">
              <div className="main__content">
                {/* @TODO: Collapse Sidebar */}
                <CollapseSidebar setActivSidebar={setActivSidebar} />

                <div className="main__content-dashboard">
                  <div className="breadcrumb-dashboard">
                    <h5>Account</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Account</Link>
                    </div>
                  </div>
                  <div className="account-info">
                    <div className="account-info__btn-wrapper">
                      {[
                        ["General", "general"],
                        ["Billing", "billing"],
                        ["Security", "security"],
                      ].map(([value, slag]) => (
                        <button
                          key={slag}
                          className={`account-info__btn button button--effect ${
                            tabItem === slag && "account-info__btn-active"
                          }`}
                          onClick={() => setTabItem(slag)}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="account-content_wrapper">
                      {tabItem == "general" && <General />}
                      {tabItem == "billing" && <Billing />}
                      {tabItem == "security" && <Security />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBody;
