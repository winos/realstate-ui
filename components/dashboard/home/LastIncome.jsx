import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import income from "/public/images/income.png";

const LastIncome = () => {
  return (
    <div className="dashboard-single__box">
      <div className="intro">
        <h5>Last Income</h5>
        <Link href="#">
          Show All
          <BsArrowRight />
        </Link>
      </div>
      {[...Array(3)].map((item, i) => (
        <div key={i} className="last-income">
          <div className="group">
            <Image src={income} alt="Last Income" />
            <div>
              <h6>Gerolstein | Am Rasbach 1-17</h6>
              <p className="secondary">18.03.2022</p>
            </div>
          </div>
          <h6>€302,50</h6>
        </div>
      ))}
    </div>
  );
};

export default LastIncome;
