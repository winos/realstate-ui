import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import Policy from "../components/privacyPolicy/Policy";
import baner__thumb from "/public/images/banner/key-illustration.png";

const privacyPolicy = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        title="Privacy Policy"
        cls="banner__bg banner--secondary"
        baner__thumb={baner__thumb}
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Privacy Policy", "#"],
          ]}
        />
      </Banner>

      {/* Policy start here */}
      <Policy />
    </>
  );
};

export default privacyPolicy;
