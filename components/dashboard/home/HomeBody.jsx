import { useState } from "react";
import {
  BankAccount,
  Chart,
  CollapseSidebar,
  CreditCard,
  Income,
  LastIncome,
  LeftSideMenu,
  NewInvestments,
  SingleItem,
} from "../index";

const HomeBody = () => {
  const [active, setActive] = useState(false);
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
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="main__content-dashboard__chart">
                        <div className="balance-report__wrapper dashboard-single__box">
                          {/* balance report */}
                          <Income />
                        </div>
                        <div className="dashboard-single__box">
                          <h5 className="investo">Investment Chart</h5>
                          <div id="investmentChart">
                            <Chart />
                          </div>
                        </div>
                        <div className="dashboard-single__box pt-3">
                          {/* My Investments */}
                          <SingleItem />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="main__content-dashboard__sidebar">
                        <div className="dashboard-single__box card-alt">
                          <div className="card-tab-btn__wrapper">
                            <button
                              className="card-tab-btn bg-transparent"
                              onClick={() => setActive(false)}
                            >
                              Bank Account
                            </button>
                            <button
                              className="card-tab-btn bg-transparent card-tab-btn-active"
                              onClick={() => setActive(true)}
                            >
                              Credit Card
                            </button>
                          </div>

                          {!active ? <BankAccount /> : <CreditCard />}
                        </div>

                        {/* Last Income */}
                        <LastIncome />

                        {/* New Investments */}
                        <NewInvestments />
                      </div>
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

export default HomeBody;
