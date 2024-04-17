import Link from "next/link";
import propertiesData from "../../data/propertiesData";
import ProductCard from "../cards/ProductCard";

const AllProducts = () => {
  return (
    <section className="properties__grid section__space">
      <div className="container">
        <div className="properties__grid__area wow fadeInUp">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>All Properties</h2>
              </div>
              <div className="col-lg-4">
                <div className="text-start text-lg-end">
                  <Link
                    href="/property"
                    className="button button--secondary button--effect"
                  >
                    Browse All Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="property__grid__wrapper">
            <div className="row">
              {propertiesData.map((singleItem) => (
                <div key={singleItem.id} className="col-lg-4 col-xl-4">
                  <ProductCard singleItem={singleItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
