import { useState } from "react";
import Application from "./Application";
import OverView from "./OverView";

const Position = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="position__details section__space">
      <div className="container">
        <div className="position__details__area">
          <h2 className="neutral-top">Investor Relations Support</h2>
          <div className="group__btn">
            {["Overview", "Application"].map((item, i) => (
              <button
                key={item}
                type="button"
                className={`button button--effect job__application__btn ${
                  active == i ? " " : "button--secondary"
                }`}
                onClick={() => setActive(i)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="position__details__content__wrapper">
            {active == 0 ? <OverView /> : <Application />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Position;
