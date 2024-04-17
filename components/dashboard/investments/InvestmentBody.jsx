import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Chart, CollapseSidebar, LeftSideMenu } from "../index";
import explore from "/public/images/icons/explore.png";
import wallet from "/public/images/icons/wallet.png";
import table_img from "/public/images/table-img.png";

const InvestmentBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);

  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
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
                    <h5>Investments</h5>
                    <div>
                      <Link href="/deshbord">Home</Link>
                      <i>
                        <BsArrowRight />
                      </i>
                      <Link href="#">Investments</Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="investment-table">
                        <div className="intro">
                          <h5>Transactions</h5>
                        </div>
                        <div className="table-wrapper">
                          <table>
                            <thead>
                              <tr>
                                <th>Project</th>
                                <th>Amount Invested</th>
                                <th>Date Invested</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(5)].map((item, i) => (
                                <tr key={i}>
                                  <td>
                                    <Image src={table_img} alt="Investment" />
                                    A19, Vilnius
                                  </td>
                                  <td>$500.00</td>
                                  <td>18.03.2022</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="investment-sidebar">
                        <div className="statistics">
                          <h5>Statistics</h5>
                          <hr />
                          <div className="group">
                            <Image src={wallet} alt="Wallet" />
                            <div>
                              <h4>€537,00</h4>
                              <p>Monthly Income</p>
                            </div>
                          </div>
                        </div>
                        <div className="explore">
                          <Image src={explore} alt="Explore" />
                          <div className="group">
                            <h6>Explore More</h6>
                            <p className="secondary">
                              Investment opportunities
                            </p>
                            <Link
                              href="/registration"
                              className="button button--effect"
                            >
                              Explore
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-single__box investment-single-box">
                    <div className="intro">
                      <h5 className="investo">Investment Chart</h5>
                      <Link href="#">Generate Report</Link>
                    </div>
                    <div id="investmentChartTwo">
                      {/* Generate Report */}
                      <Chart />
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

export default InvestmentBody;
