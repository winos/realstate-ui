import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import home from "/public/images/home.png";

const InvestForm = () => {
  return (
    <form>
      <div className="input input--secondary">
        <label htmlFor="anNum">Annual return rate:</label>
        <input
          type="number"
          name="an__num"
          id="anNum"
          placeholder="7.00%"
          required="required"
        />
      </div>
      <div className="input input--secondary">
        <label htmlFor="anNumIn">Invest</label>
        <input
          type="number"
          name="an__num_in"
          id="anNumIn"
          placeholder="€ 500"
          required="required"
        />
      </div>
      <div className="input input--secondary">
        <label htmlFor="anNumInTwo">Earn</label>
        <input
          type="number"
          name="an__num_in_two"
          id="anNumInTwo"
          placeholder="€ 35.00"
          required="required"
        />
      </div>
      <div className="capital">
        <p>Capital Growth Split:</p>
        <h5>
          40%{" "}
          <Link href="/blog">
            <i>
              <FaInfoCircle />
            </i>
          </Link>
        </h5>
      </div>
      <div className="item__security">
        <div className="icon__box">
          <Image src={home} alt="Security" />
        </div>
        <div className="item__security__content">
          <p className="secondary">Security</p>
          <h6>1st-Rank Mortgage</h6>
        </div>
      </div>
      <div className="suby">
        <h5>500</h5>
        <button type="submit" className="button button--effect">
          Invest Now
        </button>
      </div>
    </form>
  );
};

export default InvestForm;
