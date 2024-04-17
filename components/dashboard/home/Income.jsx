import Image from "next/image";
import earned from "/public/images/icons/earned.png";
import invested from "/public/images/icons/invested.png";

const Income = () => {
  return (
    <>
      <div className="balance-report">
        <div>
          <h4>€537,00</h4>
          <p className="secondary">Monthly Income</p>
        </div>
        <div className="dashboard-balance-report select">
          <select className="select-balance-report ms-sm-4">
            <option value="last">Last Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="group">
        <div className="group-inner">
          <p>Amount Invested</p>
          <h6>
            <Image src={invested} alt="Invested" />
            €108.934,00
          </h6>
        </div>
        <div className="group-inner">
          <p>Total Earnings</p>
          <h6>
            <Image src={earned} alt="Earned" />
            €12.606,00
          </h6>
        </div>
      </div>
    </>
  );
};

export default Income;
