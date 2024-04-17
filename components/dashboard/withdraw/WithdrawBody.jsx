import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { CollapseSidebar, LeftSideMenu } from "../index";

const WithdrawBody = () => {
  const [activSidebar, setActivSidebar] = useState(false);

  return (
    <div className="dashboard section__space__bottom">
      <div className="container">
        <div className="dashboard__area">
          <div className="row">
            {/* @TODO: Let Side Menu */}
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
                    <h5>Withdraw</h5>
                    <div>
                      <Link href="/dashboard">Home</Link>
                      <BsArrowRight />
                      <Link href="#">Withdraw</Link>
                    </div>
                  </div>
                  <div className="withdraw-funds">
                    <div className="withdraw-funds__inner">
                      <h5>Withdraw Funds</h5>
                      <p>
                        Use the form below to withdraw from wallet instantly
                      </p>
                      <form>
                        <div className="input input--secondary">
                          <label htmlFor="withdrawAmount">Amount</label>
                          <input
                            type="number"
                            name="withdraw_amount"
                            id="withdrawAmount"
                            placeholder="100"
                            required="required"
                          />
                        </div>
                        <div className="regi__type">
                          <label htmlFor="methodSelect">Payment Method</label>
                          <div className="type__select select px-1 px-sm-3">
                            <select
                              className="w-100 h-100 bg-transparent fw-semibold"
                              id="methodSelect"
                            >
                              <option value="method">Payment Method</option>
                              <option value="paypal">Paypal</option>
                              <option value="maestro">Maestro</option>
                              <option value="visa">Visa</option>
                              <option value="express">American Express</option>
                            </select>
                          </div>
                        </div>
                        <button type="submit" className="button button--effect">
                          Withdraw
                        </button>
                      </form>
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

export default WithdrawBody;
