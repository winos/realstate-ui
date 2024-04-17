import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CollapseSidebar, LeftSideMenu } from "../index";
import tableImg from "/public/images/table-img.png";

const TransactionBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);

  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
            {/* left side menu */}
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
                    <h5>Transactions</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Transactions</Link>
                    </div>
                  </div>
                  <div className="investment-table investment-table-two">
                    <div className="intro">
                      <h5>Transactions</h5>
                      <h6>
                        Total Number of Transactions <span>(10)</span>
                      </h6>
                    </div>
                    <div className="table-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>Project</th>
                            <th>Amount Invested</th>
                            <th>Payment Type</th>
                            <th>Date / Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[...Array(5)].map((item, i) => (
                            <tr key={i}>
                              <td>
                                <Image src={tableImg} alt="Investment" />
                                A19, Vilnius
                              </td>
                              <td>$500.00</td>
                              <td>Paypal</td>
                              <td>18.03.2022</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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

export default TransactionBody;
