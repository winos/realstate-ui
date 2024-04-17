// import Banner from "../../components/careerDetails/Banner";
import Position from "../../components/careerDetails/Position";
import Banner from "../../components/common/Banner";
import Breadcrumb from "../../components/common/Breadcrumb";
import baner__thumb from "/public/images/banner/career-details-banner-illustration.png";

const CareerDetails = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        title="Career Details"
        baner__thumb={baner__thumb}
        cls="banner__bg banner--secondary"
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "/career/{id}"],
            ["Career Details", "#"],
          ]}
        />
      </Banner>

      {/* Position start here */}
      <Position />
    </>
  );
};

export default CareerDetails;
