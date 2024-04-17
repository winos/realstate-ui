import Market from "../components/affiliate/Market";
import Step from "../components/affiliate/Step";
import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import TestimonialSlider from "../components/sliders/TestimonialSlider";
import baner__thumb from "/public/images/banner/affi-thumb.png";

const affiliate = () => {
  return (
    <>
      {/* Banner start here */}
      <Banner
        title="Affiliate Program"
        baner__thumb={baner__thumb}
        cls="key-banner banner--secondary"
      >
        <Breadcrumb
          breadcrumbs={[
            ["Home", "/"],
            ["Pages", "#"],
            ["Affiliate Program", "#"],
          ]}
        />
      </Banner>

      {/* Market start here */}
      <Market />

      {/* Step start here */}
      <Step />

      {/* Testimonial start here */}
      <TestimonialSlider cls="testimonial--two" />
    </>
  );
};

export default affiliate;
