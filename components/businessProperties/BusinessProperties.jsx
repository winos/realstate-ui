import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGripHorizontal } from "react-icons/fa";
import BusinessCard from "../cards/BusinessCard";

const BusinessProperties = ({ filteredData }) => {
  const [colActiv, setColActiv] = useState(false);

  return (
    <section className="alt__loan section__space__bottom">
      <div className="container">
        <div className="alt__loan__area wow fadeInUp">
          <div className="properties__filter__wrapper">
            <h6>
              Showing <span>505</span> Business Loans
            </h6>
            <div className="grid__wrapper">
              <div className="select px-3">
                <select className="grid__select w-100 h-100">
                  <option data-display="Sort By">Sort By</option>
                  <option value="grid">Date</option>
                  <option value="list">Price</option>
                </select>
              </div>
              <button
                className={`grid__btn grid__view ${
                  colActiv ? "" : "grid__btn__active"
                }`}
                onClick={() => setColActiv(false)}
              >
                <i>
                  <FaGripHorizontal />
                </i>
              </button>
              <button
                className={`grid__btn grid__list ${
                  colActiv ? "grid__btn__active" : ""
                }`}
                onClick={() => setColActiv(true)}
              >
                <i>
                  <FaBars />
                </i>
              </button>
            </div>
          </div>
          <div className="row alt__loan__row">
            {filteredData.map((singleItem) => (
              <BusinessCard
                key={singleItem.id}
                singleData={singleItem}
                colActiv={colActiv}
              />
            ))}
          </div>
        </div>
        <div className="cta__btn">
          <Link href="/business-loan" className="button button--effect">
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessProperties;
