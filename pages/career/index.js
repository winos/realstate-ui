import Gallery from "../../components/career/Gallery";
import Position from "../../components/career/Position";
import Banner from "../../components/common/Banner";
import Breadcrumb from "../../components/common/Breadcrumb";
import baner__thumb from "/public/images/banner/career-banner-illustration.png";

const Career = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        title="Careers"
        baner__thumb={baner__thumb}
        cls="banner__bg banner--secondary"
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Career", "/career"],
          ]}
        />
      </Banner>

      {/* GAlelry start here */}
      <Gallery />

      {/* Position start here */}
      <Position />
    </>
  );
};

export default Career;
