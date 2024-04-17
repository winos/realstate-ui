import Link from "next/link";
import { useState } from "react";
import { FaBars, FaGripHorizontal } from "react-icons/fa";
import PropertyCard from "../cards/PropertyCard";

const Properties = ({ filteredData }) => {
  const [colActiv, setColActiv] = useState(false);

  return (
    <>
      <section className="properties__filter section__space__bottom">
        <div className="container wow fadeInUp">
          <div className="properties__filter__wrapper">
            <h6>
              Showing <span>505</span> properties
            </h6>
            <div className="grid__wrapper">
              <div className="select px-sm-2">
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
          <div className="row property__grid__area__wrapper">
            {filteredData.map((singleData) => {
              return (
                <PropertyCard
                  key={singleData.id}
                  singleData={singleData}
                  colActiv={colActiv}
                />
              );
            })}
          </div>
          <div className="row property__grid__area__wrapper mt-30"></div>
          <div className="cta__btn">
            <Link href="#" className="button button--effect">
              Load More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
