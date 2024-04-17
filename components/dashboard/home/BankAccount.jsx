import { FaPlus } from "react-icons/fa";

const BankAccount = () => {
  return (
    <div className="card-tab-wrp" id="bank">
      <div className="card-tab-content">
        <button className="add-card">
          <i>
            <FaPlus className="fs-3" />
          </i>
        </button>
        <div className="card-content">
          <p className="secondary card-no">Card No.</p>
          <p>**** **** **** 4567</p>
          <div className="group">
            <div className="group-inner">
              <p className="secondary">EXPIRY DATE </p>
              <p className="secondary">09/24</p>
            </div>
            <div className="group-inner">
              <p className="secondary">CURRENCY</p>
              <p className="secondary">USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
