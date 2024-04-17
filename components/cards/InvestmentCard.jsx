import { BsCurrencyEuro } from "react-icons/bs";

const InvestmentCard = () => {
  return (
    <div className="investment__wrapper">
      <div className="investment__wrapper__inner">
        <h5>Investment Amount (100 €-30991€)</h5>
        <div className="input input--secondary">
          <input
            type="number"
            name="invest__amount"
            id="investAmount"
            placeholder="5000"
            required="required"
          />
        </div>
        <div className="radio__group">
          <div>
            <input
              type="radio"
              id="pone"
              className="radio-input"
              name="radio-group"
            />
            <label htmlFor="pone" className="radio-label">
              {" "}
              <span className="radio-border"></span> 13%{" "}
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="ptwo"
              className="radio-input"
              name="radio-group"
            />

            <label htmlFor="ptwo" className="radio-label">
              {" "}
              <span className="radio-border"></span> 13.25%
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="pthree"
              className="radio-input"
              name="radio-group"
            />
            <label htmlFor="pthree" className="radio-label">
              {" "}
              <span className="radio-border"></span> 13.5%
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="pfour"
              className="radio-input"
              name="radio-group"
            />
            <label htmlFor="pfour" className="radio-label">
              {" "}
              <span className="radio-border"></span> 14%{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="investment__footer">
        <div>
          <p className="secondary">I will earn ( 01 Month )</p>
          <h4 className="neutral-bottom">
            O.72 <BsCurrencyEuro />
          </h4>
        </div>
        <div>
          <p className="secondary">I will earn ( 12 Month )</p>
          <h4 className="neutral-bottom">
            11.72 <BsCurrencyEuro />
          </h4>
        </div>
        <div>
          <p className="secondary">I will earn ( 24 Month )</p>
          <h4 className="neutral-bottom">
            17.72 <BsCurrencyEuro />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
