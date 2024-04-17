import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import RisksFaq from "../components/key-risks/RisksFaq";
import baner__thumb from "/public/images/banner/key-illustration.png";

const keyRisks = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        cls="banner__bg banner--secondary"
        title="Key risks"
        baner__thumb={baner__thumb}
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Key risks", "#"],
          ]}
        />
      </Banner>

      {/* Faq start here */}
      <RisksFaq />
    </>
  );
};

export default keyRisks;
