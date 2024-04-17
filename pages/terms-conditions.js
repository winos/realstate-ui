import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import TermsConditionBody from "../components/termsCondition/TermsConditionBody";
import baner__thumb from "/public/images/banner/key-illustration.png";

const TermsConditions = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        cls="banner__bg banner--secondary terms__banner"
        title="Terms & Conditions"
        baner__thumb={baner__thumb}
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Terms & Conditions", "#"],
          ]}
        />
      </Banner>

      {/* Terms Condition Body start here */}
      <TermsConditionBody />
    </>
  );
};

export default TermsConditions;
