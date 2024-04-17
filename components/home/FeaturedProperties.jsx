import Link from "next/link";
import ProductCardHorizontal from "../cards/ProductCardHorizontal";

const FeaturedProperties = ({ filteredData }) => {
  return (
    <section className="featured__properties section__space">
      <div className="container">
        <div className="featured__properties__area wow fadeInUp">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>Featured Properties</h2>
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
          {filteredData.map((singleItem) => (
            <div key={singleItem.id} className="property__list__wrapper">
              <ProductCardHorizontal singleItem={singleItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
