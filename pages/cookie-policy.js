import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import Details from "../components/cookiPolicy/Details";
import baner__thumb from "/public/images/banner/key-illustration.png";

const CookiePolicy = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        title="Cookie Policy"
        cls="banner__bg banner--secondary"
        baner__thumb={baner__thumb}
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Cookie Policy", "#"],
          ]}
        />
      </Banner>

      {/* Details start here */}
      <Details />
    </>
  );
};

export default CookiePolicy;
